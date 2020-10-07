import React, {useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;

        }
    }, [messagesRef]);

    return (
    <Container>
        <Messages ref={messagesRef}>            
            {Array.from(Array(15).keys()).map((n) => (
               <ChannelMessage 
               key={n}
               author="Diego Galdino"
               date="16/04/2020"
               content="Hoje e meu aniversario!"
               />
            ))}
            

            <ChannelMessage 
            author="Dayane Mitze Laura"
            date="16/04/2020"
            content={
                <>
                <Mention>@Diego Galdino</Mention>, vai estudar hoje ?
                </>
            }
            hasMentions
            isBot
            />
    

        </Messages>

        <InputWrapper>
            <Input type="text" placeholder="Conversarem #chat-livre" />
            <InputIcon />
        </InputWrapper>
    </Container>);

    };


export default ChannelData;
