import React, { Component } from "react";
import { auth } from "../service/firebase";
import { db } from "../service/firebase";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: auth().currentUser,
            chats: [],
            content: "",
            readError: null,
            writeError: null,
            loadingChats: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myRef = React.createRef();
    }
    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth() + 1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    async componentDidMount() {
        this.setState({ readError: null, loadingChats: true });
        const chatArea = this.myRef.current;
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                chats.sort(function (a, b) { return a.timestamp - b.timestamp })
                this.setState({ chats });
                chatArea.scrollBy(0, chatArea.scrollHeight);
                this.setState({ loadingChats: false });
            });
        } catch (error) {
            this.setState({ readError: error.message, loadingChats: false });
        }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        const chatArea = this.myRef.current;
        try {
            await db.ref("chats").push({
                content: this.state.content,
                timestamp: Date.now(),
                uid: this.state.user.uid
            });
            this.setState({ content: '' });
            chatArea.scrollBy(0, chatArea.scrollHeight);
        } catch (error) {
            this.setState({ writeError: error.message });
        }
    }

    render() {
        return (
            <div className="py-5 text-center container">
                <h4>Chat SofkaU</h4>
                <div className="chat-area" ref={this.myRef}>
                    {/* Indicardor de carga */}
                    {this.state.loadingChats ? <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : ""}
                    {/* Area del chat */}
                    {this.state.chats.map(chat => {
                        return <p key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                            {chat.content}
                            <br />
                            <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
                            <span className="chat-time float-left">{this.state.user.email}</span>
                        </p>
                    })}
                </div>
                <form onSubmit={this.handleSubmit} className="mx-3">
                    <textarea className="form-control" placeholder="Ingresa tu mensaje" name="content" onChange={this.handleChange} value={this.state.content} />
                    {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
                    <button type="submit" className="btn btn-submit px-5 mt-4">Send</button>
                </form>
                <div className="py-5 mx-3">
                    Login in as: <strong className="text-info">{this.state.user.email}</strong>
                </div>
            </div>
        )
    }

}