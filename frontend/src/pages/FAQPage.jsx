import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../assets/wrappers/faq";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: "", answer: "" });
  const [editFAQ, setEditFAQ] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const res = await axios.get("https://fruitai-2nlh.onrender.com/api/faqs/");
    setFaqs(res.data);
  };

  const handleCreateFAQ = async () => {
    const res = await axios.post(
      "https://fruitai-2nlh.onrender.com/api/faqs/",
      newFAQ
    );
    setFaqs([...faqs, res.data]);
    setNewFAQ({ question: "", answer: "" });
  };

  const handleUpdateFAQ = async (id) => {
    const res = await axios.put(
      `https://fruitai-2nlh.onrender.com/api/faqs/${id}/`,
      editFAQ
    );
    const updatedFaqs = faqs.map((faq) => (faq.id === id ? res.data : faq));
    setFaqs(updatedFaqs);
    setEditFAQ(null);
  };

  const handleDeleteFAQ = async (id) => {
    await axios.delete(`https://fruitai-2nlh.onrender.com/api/faqs/${id}/`);
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <Wrapper>
      <div className="faq-container">
        <h1>Fruit FAQs</h1>

        <div className="faq-form">
          <input
            type="text"
            placeholder="Add new FAQ question"
            value={newFAQ.question}
            onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
          />
          <textarea
            placeholder="Add answer"
            value={newFAQ.answer}
            onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
          />
          <button onClick={handleCreateFAQ}>Add FAQ</button>
        </div>

        {faqs.map((faq) => (
          <div key={faq.id} className="faq-item">
            {editFAQ && editFAQ.id === faq.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editFAQ.question}
                  onChange={(e) =>
                    setEditFAQ({ ...editFAQ, question: e.target.value })
                  }
                />
                <textarea
                  value={editFAQ.answer}
                  onChange={(e) =>
                    setEditFAQ({ ...editFAQ, answer: e.target.value })
                  }
                />
                <button onClick={() => handleUpdateFAQ(faq.id)}>Save</button>
              </div>
            ) : (
              <>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
                <div className="faq-buttons">
                  <button className="edit-btn" onClick={() => setEditFAQ(faq)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteFAQ(faq.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FAQPage;
