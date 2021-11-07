import Select, { GroupBase, Props } from 'react-select'
import theme from '../../styles/theme'

const customStyles = {
  option: (provided: object, state: { isSelected: boolean }) => ({
    ...provided,
    background: state.isSelected ? theme.colors.secondary : 'none',
  }),
  container: (provided: object) => ({
    ...provided,
    width: '40%',
    flex: '1 1 auto',
    marginRight: '8px'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  })
}

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select {...props} styles={customStyles}/>
  )
}

export default CustomSelect