import React from "react";
import Window, {WindowProps} from "ui/components/Window";
import cx from 'classnames';
import ButtonGroup from "ui/components/controls/ButtonGroup";
import Button from "ui/components/controls/Button";

export function Dialog({children, className, okText, cancelText, onOK, ...props}: WindowProps & {
  cancelText?: string,
  okText?: string,
  onOK?: () => void
}) {

  return <Window className={cx(className, 'dialog')}
                 footer={
                   <ButtonGroup className='dialog-buttons padded'>
                     <Button onClick={props.onClose}>{cancelText || 'Cancel'}</Button>
                     {onOK && <Button type='accent' onClick={onOK}>{okText || 'OK'}</Button>}
                   </ButtonGroup>
                 }
                 {...props} >

    <div className='dialog-content padded'>
      {children}
    </div>

  </Window>
}