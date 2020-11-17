export const customStyles = {
    option: (provided, state) => ({
      ...provided,
    //   borderBottom: '1px dotted pink',
    //   color: state.isSelected ? 'red' : 'blue',
    //   padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      borderBottom : '1px solid #000',
      display : 'flex',
      alignItems : 'center',
      fontSize : '24px'
    }),
    placeholder: () => ({
        fontSize : '24px',
        fontWeight : 500
    }),
    input: () => ({
        color : '#000',
    }),
    menu: () => ({
        backgroundColor : '#fff',
    }),
}

export const lightStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    borderBottom : '1px solid #fff',
    display : 'flex',
    alignItems : 'center',
    fontSize : '24px'
  }),
  placeholder: () => ({
      fontSize : '24px',
      fontWeight : 500
  }),
  input: () => ({
      color : '#fff',
  }),
  menu: () => ({
      backgroundColor : 'transparent',

  }),
}
