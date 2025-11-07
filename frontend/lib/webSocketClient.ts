import { Client, Message, StompSubscription } from '@stomp/stompjs';
import { getToken } from './auth';

export class WebSocketClient{
    private url: string;
    private socket: Client | null;
    private listeners: StompSubscription[]
    private token: string | null;
    


    constructor(url: string){
        this.url = url
        this.socket = null
        this.listeners = []
        this.token = getToken()
    }

    connect(onConnect: ()=>void){
        this.socket = new Client({
            brokerURL: this.url+`?token=${this.token}`,
            reconnectDelay: 5000,
            onConnect: ()=>{
                console.log("Connected to STOMP broker")
                onConnect?.()
            }
       })
       this.socket.activate()
       console.log("Connect function executed!")
       return this.socket;
    }

    subscribeToChat(chatId: string, callback: (message: Message)=>void){
        if(!this.socket)
            return
        const subscriptionId = this.socket.subscribe(`/topic/chats/${chatId}`,callback)

        this.listeners.push(subscriptionId)

        return subscriptionId;
    }

    close(){
        this.listeners.map((listener)=>listener.unsubscribe())
        this.socket?.deactivate()
    }


}