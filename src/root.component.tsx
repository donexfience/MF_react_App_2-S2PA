// App2/Root.tsx
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "./eventBus/eventBus";

interface SharedData {
  messages: string;
  timestamp: number;
  sender: string;
}

export default function Root(props) {
  const [receivedMessages, setReceivedMessages] = useState<SharedData[]>([]);

  useEffect(() => {
    const handleSharedData = (data: SharedData) => {
      setReceivedMessages((prev) => [...prev, data]);
    };

    // event listener
    window.eventBus.on("SHARED_DATA_EVENT", handleSharedData);

    // Cleanup removing the event listenere
    return () => {
      window.eventBus.remove("SHARED_DATA_EVENT", handleSharedData);
    };
  }, []);

  return (
    <section id="Navigation" className="p-4">
      {console.log(receivedMessages, "recived message")}
      <h2 className="text-xl font-bold mb-4">Received Messages:</h2>
      <div className="space-y-2">
        {receivedMessages.map((msg, index) => (
          <div key={msg.timestamp} className="border p-2 rounded">
            <p>
              <strong>Message:</strong> {msg.messages}
            </p>
            <p>
              <strong>From:</strong> {msg.sender}
            </p>
            <p>
              <strong>Time:</strong> {new Date(msg.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </section>
  );
}
