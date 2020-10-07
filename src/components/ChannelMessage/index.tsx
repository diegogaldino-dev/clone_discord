import React from 'react';

import { Container, Avatar,  Message, Header, Content} from './styles';
export { Mention } from './styles';

export interface Props {
    author: string;
    date: string;
    content: string | React.ReactElement | React.ReactNode;
    hasMentions?:boolean;
    isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
    author,
    date,
    content,
    hasMentions,
    isBot
}) => {
    return(
        <Container className= { hasMentions ? 'mention' : ''}>
        <Avatar className={isBot ? 'bot' : ''} />

        <Message>
            <Header>
                <strong>{author}</strong>

                {isBot && <span>Bot</span>}

                <time>{date}</time>
            </Header>
            <Content>{content}</Content>
        </Message>

    </Container>
    );
};


export default ChannelMessage;
