import React, { FC, useCallback } from 'react';
import { SideMenuWrapper } from '../styles';
import {SideMenuComponentProps, MenuItemId} from '../../@types';
import { LimberTabControl } from 'src/components/LimberTabControl';
import { TabItemId } from 'src/components/LimberTabControl/@types';

/**
 * Represents application's side menu.
 * You can pass the items and it would automatically selected the first item when it has an id. 
 * Otherwise it won't select any of them unless you pass the `selectedId` prop.
 */
export const SideMenuComponent : FC<SideMenuComponentProps> = ({
    items,
    selectedId,
    onItemSelected : prop_onItemSelected
})=>{

    const onItemSelected = useCallback((itemId: TabItemId)=>{
        const item = items?.find?.(item => item.id === itemId);
        if(!item) return;
        prop_onItemSelected?.(item);
    },[items, prop_onItemSelected]);

    return (
        <SideMenuWrapper>

            <div className="sidemenu-header"/>
            <LimberTabControl 
                items={items} 
                selectedId={selectedId || items?.[0]?.id}
                onSelect={onItemSelected}/>
            <div className="sidemenu-footer"/>

        </SideMenuWrapper>
    )
}