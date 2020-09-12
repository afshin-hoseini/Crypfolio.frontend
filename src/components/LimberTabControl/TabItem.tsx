import React, { FC, useCallback, useRef } from 'react';
import { TabItemComponentProps } from './@types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TabItemWrapper } from './styles';

console.log("TabItemWrapper =>", TabItemWrapper)

export const TabItem : FC<TabItemComponentProps> = ({
    title,
    icon,
    id,
    selected,
    onClick: clickHandler
})=>{

    const wrapperRef = useRef<HTMLDivElement>(null);

    const onClick = useCallback(()=>{
        clickHandler?.(id || "", wrapperRef)
    }, [id,clickHandler]);

    return (
        <TabItemWrapper 
            id={`item-${id}`}
            className={`${selected ? "selected":""}`}
            onClick={onClick} 
            ref={wrapperRef}>
            <span className="text-primary-text"><FontAwesomeIcon icon={icon}/>{' '}{title}</span>
        </TabItemWrapper>
    )
}