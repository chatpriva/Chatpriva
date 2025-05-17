
import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await addDoc(collection(db, "messages"), {
        text: input,
        timestamp: serverTimestamp()
      });
      setInput("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>VaultBox Chat</h2>
      <div style={{ maxHeight: 300, overflowY: 'auto', marginBottom: 10 }}>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua mensagem..." />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
