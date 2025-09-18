import ChatBubble from "./ChatBubble";

export const ChatPanel = () => {
    return (
        <div className="p-4 space-y-2">
            <ChatBubble
            message="This ia a good message"
                sender="other"
                attachment={{
                    type: "file",
                    url: "https://example.com/report.pdf",
                    name: "report.pdf",
                }}
                timestamp="11:25 AM"
            />
            <ChatBubble message="Hey, how are you doing?" sender="other" timestamp="10:05 AM" />
            <ChatBubble message="I'm good, working on the project. You?" sender="me" timestamp="10:06 AM" />
            <ChatBubble message="Same here! Let's sync later." sender="other" timestamp="10:07 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
            <ChatBubble message="Hey, how are you doing?" sender="other" timestamp="10:05 AM" />
            <ChatBubble message="I'm good, working on the project. You?" sender="me" timestamp="10:06 AM" />
            <ChatBubble message="Same here! Let's sync later." sender="other" timestamp="10:07 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
            <ChatBubble message="Hey, how are you doing?" sender="other" timestamp="10:05 AM" />
            <ChatBubble message="I'm good, working on the project. You?" sender="me" timestamp="10:06 AM" />
            <ChatBubble message="Same here! Let's sync later." sender="other" timestamp="10:07 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
            <ChatBubble message="Sure thing 👍" sender="me" timestamp="10:08 AM" />
        </div>
    );
};
