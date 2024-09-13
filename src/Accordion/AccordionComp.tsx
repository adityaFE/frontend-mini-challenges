import { useState } from 'react';
import { AccordionCompWrapper, AccordionHeader, AdditonalText, IconWrapper } from './subcomponents'
import AddRoundedIcon from '@mui/icons-material/Add';
import RemoveRoundedIcon from '@mui/icons-material/Remove';

const AccordionComp = () => {

    const [isExpanded,setIsExpanded] = useState(false)

    const handleOnClick= () =>{
        setIsExpanded(!isExpanded)
    }
  return (
        <AccordionCompWrapper>
            <AccordionHeader>
                Question goes here
                <IconWrapper onClick={handleOnClick}>
                    {!isExpanded?<AddRoundedIcon color='disabled'/>: <RemoveRoundedIcon color='disabled'/>}
                </IconWrapper>
            </AccordionHeader>
            <div
                style={{
                    maxHeight: isExpanded ? '500px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.2s ease',
                }}
                >
                <AdditonalText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore 
                     dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris 
            </AdditonalText>
            </div>
           
            
        </AccordionCompWrapper>
    //</div>
        
  )
}

export default AccordionComp