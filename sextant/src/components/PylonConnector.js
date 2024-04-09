import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:55455');

const PylonConnector = () => {
    const [latency, setLatency] = useState(null);

    useEffect(() => {
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - parseInt(message.data));
        };

        return () => {
            client.close();
        };
    }, []);

    return (
        <span className="PylonConnector">
            {latency}
        </span>
    );
};

export default PylonConnector;
