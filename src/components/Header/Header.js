import { TextField,ThemeProvider,createTheme, MenuItem } from '@mui/material'
import React from 'react'
import "./Header.css"
import categories from "../../data/category"

const Header = ({category,setCategory,word,setWord}) => {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    const handleChange=(language) =>{
        setCategory(language);
        setWord("");
    }
  return (
    <div className='header'>
    

        <span className='title'>{word ? word:"A.E.G"}</span>
        <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField  
                className='search'
                label="Search a Word" 
                value ={word}
                onChange={(e) => setWord(e.target.value)}
                />
                <TextField   
                    className="select"
                    select
                    label="Language"
                    value ={category}
                    onChange={(e) => handleChange(e.target.value)}
                    helperText="Please select your currency"
                    >
                        {categories.map((option)=>(
                            <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                        ))}
                    ))
                </TextField>
                </ThemeProvider>
        </div>
    </div>
  )
}

export default Header