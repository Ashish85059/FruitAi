import React, { useState, useEffect } from "react";
import axios from "axios";
// import axios from "../utils/axios";
import Wrapper from "../assets/wrappers/faq";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [editFAQ, setEditFAQ] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/faqs/");
    setFaqs(res.data);
  };

  const handleCreateFAQ = async () => {
    const res = await axios.post("http://127.0.0.1:8000/api/faqs/", newFAQ);
    setFaqs([...faqs, res.data]);
    setNewFAQ({ question: "", answer: "" });
  };

  const handleUpdateFAQ = async (id) => {
    const res = await axios.put(
      `http://127.0.0.1:8000/api/faqs/${id}/`,
      editFAQ
    );
    const updatedFaqs = faqs.map((faq) => (faq.id === id ? res.data : faq));
    setFaqs(updatedFaqs);
    setEditFAQ(null);
  };

  const handleDeleteFAQ = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/faqs/${id}/`);
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <Wrapper>
    <div className="faq-container">
      <h1>FAQ Page</h1>

      <div>
        <input
          type="text"
          placeholder="Question"
          value={newFAQ.question}
          onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFAQ.answer}
          onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
        />
        <button onClick={handleCreateFAQ}>Add FAQ</button>
      </div>

      {faqs.map((faq) => (
        <div key={faq.id}>
          {editFAQ && editFAQ.id === faq.id ? (
            <>
              <input
                type="text"
                value={editFAQ.question}
                onChange={(e) =>
                  setEditFAQ({ ...editFAQ, question: e.target.value })
                }
              />
              <input
                type="text"
                value={editFAQ.answer}
                onChange={(e) =>
                  setEditFAQ({ ...editFAQ, answer: e.target.value })
                }
              />
              <button onClick={() => handleUpdateFAQ(faq.id)}>Save</button>
            </>
          ) : (
            <>
              <h2>Question: {faq.question}</h2>
              <p>Answer: {faq.answer}</p>
              <button onClick={() => setEditFAQ(faq)}>Edit</button>
              <button onClick={() => handleDeleteFAQ(faq.id)}>Delete</button>
            </>
          )}
        </div>
      ))} 
    </div>
    </Wrapper>
  );
};

export default FAQPage;
