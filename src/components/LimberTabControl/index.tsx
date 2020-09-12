import React, { FC, useMemo, useState, useRef, useEffect } from 'react';
import { LimberTabControlItemsContainerWrapper } from './styles';
import { TabItem } from './TabItem';
import {TabItemsContainerComponentProps as props, TabItemId} from './@types';
import { SelectedItemBkg } from './SelectedItemBkg';

export const LimberTabControl : FC<props> = ({
    items,
    selectedId,
    className
})=>{

    const [selectedItemRect, setSelectedItemRect] = useState<DOMRect>();
    const menuContainerRef = useRef<HTMLDivElement>(null);
    const [selectedItemId, setSelectedItemId] = useState<TabItemId | undefined>(selectedId);

    /** 
     * Updates the selected item ID state when the 
     * given corresponding prop changes. 
     */
    useEffect(()=>{
        if(!selectedId) return;
        setSelectedItemId(selectedId);
    },[selectedId])

    /**
     * Caluculate selected item's bounding rect.
     */
    useEffect(()=>{

        if(!selectedItemId) return;

        const id = `item-${selectedItemId}`;
        const itemElement = menuContainerRef.current?.querySelector(`#${id}`);
        const itemRect = itemElement?.getBoundingClientRect();
        const menuRect = menuContainerRef.current?.getBoundingClientRect();
        if(!itemRect || !menuRect) return;

        /** The item's bounding rect relative to side menu container 
         * where the selected bkg is going to be positioned based on. 
         */
        const translatedRect = new DOMRect(
            itemRect.x - menuRect.x,
            itemRect.y - menuRect.y,
            itemRect.width,
            itemRect.height
        )

        setSelectedItemRect(translatedRect);
    }, [selectedItemId]);

    
    const sideMenuItems = useMemo(()=>{

        return (items ?? []).map((item, index) => { 
            const itemId = item.id || "" + index;
            return <TabItem 
                selected={selectedItemId === itemId}
                icon={item.icon} 
                title={item.title} 
                id={itemId} 
                onClick={setSelectedItemId}
                key={itemId} />
        })
    },[items, selectedItemId])

    return (
        <LimberTabControlItemsContainerWrapper 
            ref={menuContainerRef} 
            className={`${className}`}>

            <SelectedItemBkg positionRect={selectedItemRect}/>
            {sideMenuItems}

        </LimberTabControlItemsContainerWrapper>
    )
}