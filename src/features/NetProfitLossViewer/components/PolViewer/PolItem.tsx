import React, { FC, useMemo } from 'react';
import {Header1} from 'src/components/Text';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { PolItemComponentProps } from '../../@types';
import { PolItemWrapper } from '../styles';

export const PolItem : FC<PolItemComponentProps> = ({
    icon, formattedAmount
})=> {

    /** 
     *  Memoises the icon element as this component would be 
     *  re-rendered heavily based on the amount value
     */
    const iconElement = useMemo(()=><FontAwesomeIcon icon={icon} className="pol-item-icon"/>, [icon])
    
    return useMemo(()=>(
        <PolItemWrapper className="pol-item">
            {iconElement}
            <Header1 className="pol-item-amount">{formattedAmount}</Header1 >
        </PolItemWrapper>
    ), [iconElement, formattedAmount])
}