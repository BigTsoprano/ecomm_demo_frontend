import React from "react"
import { IconProps } from "types/icon"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Search: React.FC<IconProps> = ({
  size = "16",
  color = "currentColor",
  ...attributes
}) => {
  return (
<SearchOutlinedIcon style={{fontSize:'18px'}}/>
  )
}

export default Search
