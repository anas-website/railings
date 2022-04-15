import React from 'react';
import Section from "./section";
import cx from 'classnames';
import {ActiveLabel, Controls, getEdgeViewObjects, getInitColor, mapIterable, setViewObjectsColor, TAB} from "./utils";
import {EdgeExplorer, EdgesExplorer, LoopsExplorer} from "./shellExplorer";
import {DETECTED_EDGE, DISCARDED_EDGE, GREEN, GREEN_YELLOW, SALMON, WHITE, YELLOW} from "./colors";

export default class LoopDetectionExplorer extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      step: 0
    }
  }
  
  render() {
    let {loopDetection: {id, graph, steps, detectedLoops}, group3d} = this.props;

    let detectedEdges = new Set();
    for (let loop of detectedLoops) {
      loop.halfEdges.forEach(e => detectedEdges.add(e));
    }


    let step = steps[this.state.step];
    if (!step) {
      return null;
    }
    let candidates = null;
    let currEdgeExplorer = null;
    if (step.type === 'NEXT_STEP_ANALYSIS') {
      candidates = step.candidates.map(c => <EdgeExplorer key={c.refId} edge={c} {...{group3d}} 
                                                          category='loop-detection' context={detectedEdges}                                                     
                                                          customName={'candidate' + (c === step.winner ? '(winner)' : '') } />)
    } else if (step.type === 'TRY_EDGE') {
      currEdgeExplorer = <EdgeExplorer edge={step.edge} {...{group3d}} category='loop-detection' context={detectedEdges} customName={'current edge'}  />
    }


    function backTrack(stepIdx) {
      let looped = new Set();
      let used = new Set();
      let active = [];
      
      for (let i = 0; i < stepIdx + 1; i++) {
        let step = steps[i];
        switch (step.type) {
          case 'TRY_LOOP': {
            if (active.length !== 0) {
              active.forEach(e => used.add(e));
              active = [];
            }
            break;
          }
          case 'TRY_EDGE': {
            active.push(step.edge);
            break;
          }
          case 'LOOP_FOUND': {
            active.forEach(e => looped.add(e));
            active = [];
            break;
          }
        }
      }
      let lastActive = active[active.length - 1]; 
      active = new Set(active);
      return {
        active, used, looped, lastActive
      }
    }
    
    function color(stepIdx) {
      let step = steps[stepIdx];
      let {active, used, looped, lastActive} = backTrack(stepIdx);
      setViewObjectsColor(getGraphViewObjects, group3d, 'loop-detection', detectedEdges, graph, vo => {
        vo.visible = true;
        let o = vo.__tcad_debug_topoObj;
        if (step.type === 'NEXT_STEP_ANALYSIS') {
          if (step.winner === o){
            return YELLOW
          } else if (step.candidates.indexOf(o) !== -1) {
            return WHITE;
          }
        }

        if (lastActive === o) {
          return GREEN_YELLOW;
        } else if (active.has(o)) {
          return GREEN;
        } else if (looped.has(o)) {
          return DETECTED_EDGE;
        } else if (used.has(o)) {
          return DISCARDED_EDGE;
        }
        return SALMON;
      });
      __DEBUG__.render();
    }
    
     const doStep = nextStepIdx => {
      let nextStep = steps[nextStepIdx];
      if (nextStep !== undefined) {
        color(nextStepIdx);        
        this.setState({step: nextStepIdx});
      }
    };
    
    const stepNext = () => {
      doStep(this.state.step + 1);
    };

    const stepBack = () => {
      doStep(this.state.step - 1);
    };

    let ctrlProps = {
      viewObjectsProvider: getGraphViewObjects, topoObj: graph, group3d, category: 'loop-detection', context: detectedEdges
    };
    let begin = this.state.step === 0;
    let end = this.state.step === steps.length - 1;
    
    let controls = <span>
        <Controls {...ctrlProps} />
        <span className={cx({clickable: !begin, grayed: begin})} onClick={stepBack}><i className='fa fa-fw fa-caret-square-o-left' /> back</span>
        <span className={cx({clickable: !end, grayed: end})} onClick={stepNext}><i className='fa fa-fw fa-caret-square-o-right' /> next</span>
        <i> step: <b>{this.state.step || '-'}</b></i>
      </span>;

    let name = <ActiveLabel {...ctrlProps}>loop detection {id}</ActiveLabel>;

    return <Section name={name} closable defaultClosed={true} controls={controls}>
      {candidates}
      {currEdgeExplorer}
      <GraphExplorer {...{graph, group3d}} context={detectedEdges} />
      <LoopsExplorer {...{group3d}} name='detected loops' loops={detectedLoops} category='loop-detection' context={detectedEdges}/>
      <DiscardedExplorer {...{detectedEdges, graph}} />
    </Section>
    ;
  }
}


export function GraphExplorer({graph, group3d, context}) {
  let ctrlProps = {
    viewObjectsProvider: getGraphViewObjects, topoObj: graph, group3d, category: 'loop-detection', context
  };
  let controls = <Controls {...ctrlProps} />;
  let name = <ActiveLabel {...ctrlProps}>graph</ActiveLabel>;

  return <Section name={name} tabs={TAB} closable defaultClosed={true} controls={controls}>
    {mapIterable(graph, edge => <EdgeExplorer key={edge.refId} {...{edge, group3d, context}} category='loop-detection'/>)}
  </Section>
} 


export function DiscardedExplorer({detectedEdges, graph, group3d}) {
  let discardedEdges = new Set(graph);
  for (let edge of detectedEdges) {
    discardedEdges.delete(edge);
  }
  return (discardedEdges.size !== 0 ? <EdgesExplorer edges={Array.from(discardedEdges)} {...{group3d}} 
                                                     category='loop-detection' context={detectedEdges} name='discarded edges' /> : null)
}


function getGraphViewObjects(group3d, category, context, out, graph) {
  graph.forEach(getEdgeViewObjects.bind(null, group3d, category, context, out));
}
