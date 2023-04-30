import { styled } from '@/styles/stitches.config'

export const InputContainer = styled('div', {
  margin: '1rem 0',
})

export const InputBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '0.375rem',
  color: '#d3d3d3',
  borderRadius: '0.25rem',
  backgroundColor: '#ecebf1',
})

export const InputTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '12px',
  marginBottom: '4px',
  color: '#525252',
})

export const InputPasswordContainer = styled('div', {
  display: 'flex',
  gap: '8px',
})

export const InputBasic = styled('input', {
  backgroundColor: '#ecebf1',
  height: '45px',
  width: '100%',
  textAlign: 'center',
  outline: '2px solid transparent',
  outlineOffset: '2px',
  borderColor: '#9ca3af',
  border: 'none',
  borderRadius: '0.25rem',
})

export const InputUnderline = styled('input', {
  textAlign: 'center',
  border: 'none',
  background: 'none',
  outline: 'none',
  margin: '16px 0',
  padding: '4px 0',
  borderBottom: '1px solid #383838',
})
