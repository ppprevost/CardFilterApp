import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchItem, filterItem} from "../modules/action";
import SearchInput from './SearchInput';
import Card from './Card';
import styled from 'styled-components';
import {Dispatch} from 'react'

export interface Item {
    id: string,
    name: string,
    tags: string[]
}

const SectionStyled = styled.section`
margin: 12px 30px;
display: flex;
flex-wrap: wrap;
   justify-content: center;
 
`


const mapStateToProps = (state: { items: Item[], actualFilter: Item[] }) => ({
    items: state.items,
    actualFilter: state.actualFilter
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchItemAction: () => dispatch(fetchItem()),
    filterItemAction: (search: string) => dispatch(filterItem(search))
});

export const RootComponent: FunctionComponent<{ items: Item[], fetchItemAction: () => void, filterItemAction: (search:string) => void, actualFilter: Item[] }> = ({items, fetchItemAction, filterItemAction, actualFilter}) => {
    const actualFilteredItem = actualFilter ? actualFilter : items
    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        filterItemAction((evt.target.value))
    }
    useEffect(() => {
        fetchItemAction()
    })
    return (<>
        <SearchInput label="Que recherchez-vous ?" onChange={onInputChange} />
        <SectionStyled>
            {
                actualFilter ===null || actualFilter.length ?
                actualFilteredItem.map(({name, id, tags}) => <Card key={id} id={id}>
                <Card.Title mainTitle={name} />
                <Card.Tags tags={tags} />
            </Card>): 'pas de résultats'}
        </SectionStyled>

    </>)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent)