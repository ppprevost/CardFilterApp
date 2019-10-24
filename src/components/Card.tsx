import React, {FunctionComponent} from 'react';
import styled from 'styled-components';

import {device} from '../device';

const StyledCard = styled.article`
 width:100%;
  margin: 16px 4px;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.05);

@media ${device.tablet}{
 width:370px;
 }
 
 @media ${device.laptop}{
 width:260px;
 }
 
 .card-title {
  margin-bottom: 15px;
  font-size:24px;
  font-weight:600
}

 .card-info {
  display: flex;
  align-items: center;
  margin-bottom: 2px;  
}

 .card-info > span {
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
}

 .card-info > i.material-icons {
  color: #777;
  margin-right: 5px;
}
`

const CardTagsStyled = styled.div`
    
    @media ${device.tablet} {
    flex-wrap: wrap;
     display:flex
    }
    
    span {
    border-radius: 30px;
    text-align: center;
    background-color: #FCFCFC;
    border:1px solid #ECECEC;
    margin:5px;
    color:#777;
    vertical-align: middle;
    font-size:11px;
    min-width: 10px;
    padding: 3px 9px;
    
    }
`


interface CardProps {
    id: string;
}

const Card: FunctionComponent<CardProps> & {
    Title: typeof Title,
    Tags: typeof Tags
} = ({children}) => (
    <StyledCard className="Card card">
        <div className="card-content">
            {children}
        </div>
    </StyledCard>
);

const Title = ({mainTitle}: { mainTitle: string }) => (
    <h2 className="card-title">
        {mainTitle}
    </h2>
);

const Tags = ({tags}: { tags: string[] }) => (
    <CardTagsStyled>  {tags.map(elem => <span key={elem}>{elem}</span>)}
    </CardTagsStyled>
)


Card.Title = Title;
Card.Tags = Tags

export default Card;



