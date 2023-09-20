import React from 'react'
import { registerAsWebComponent } from 'react-webcomponentify'
import {
  EuiButton,
  EuiCheckboxGroup,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiFilePicker,
  EuiLink,
  EuiRange,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  useGeneratedHtmlId,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
} from '@elastic/eui'
export const Input = () => {
  return (
    <div>
      <p></p>
      {['disabled'].map((value) => (
        <>
          <EuiFlexGroup key={value} responsive={false} gutterSize='s' alignItems='center'>
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                isDisabled={value === 'disabled' ? true : false}
                color={value !== 'disabled' ? value : 'primary'}
                onClick={() => {}}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </EuiButtonEmpty>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                size='s'
                isDisabled={value === 'disabled' ? true : false}
                color={value !== 'disabled' ? value : 'primary'}
                onClick={() => {}}
              >
                Small2
              </EuiButtonEmpty>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiButtonEmpty
                size='xs'
                isDisabled={value === 'disabled' ? true : false}
                color={value !== 'disabled' ? value : 'primary'}
                onClick={() => {}}
              >
                Extra small
              </EuiButtonEmpty>
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiSpacer size='s' />
        </>
      ))}
    </div>
  )
}

registerAsWebComponent(Input, 'my-input')

/*
 In html: 
 <my-input></my-input>
*/
