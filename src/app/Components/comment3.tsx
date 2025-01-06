'use client'

import React, { useState } from 'react';

// Define the structure of a comment
interface Comment {
  id: number;
  name: string;
  email: string;
  date: string;
  message: string;
}

const Comment3: React.FC = () => {
  // States for form inputs and comments list
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Function to handle form submission
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() && email.trim() && message.trim()) {
      if (editingId) {
        // If editing, update the comment
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === editingId
              ? { ...comment, name, email, message }
              : comment
          )
        );
        setEditingId(null); // Reset editing state
      } else {
        // Otherwise, add a new comment
        const newComment: Comment = {
          id: comments.length + 1,
          name,
          email,
          date: new Date().toLocaleDateString(),
          message,
        };

        setComments((prevComments) => [...prevComments, newComment]);
      }

      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // Function to handle comment deletion
  const handleDeleteComment = (id: number) => {
    setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
  };

  // Function to handle comment editing
  const handleEditComment = (id: number) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setName(commentToEdit.name);
      setEmail(commentToEdit.email);
      setMessage(commentToEdit.message);
      setEditingId(id); // Set the ID of the comment being edited
    }
  };

  return (
    <div className="p-6">
      {/* Form Section */}
      <h2 className="text-xl font-bold mb-4">
        {editingId ? 'Edit Comment' : 'Post a Comment'}
      </h2>
      <form onSubmit={handleCommentSubmit} className="mb-8">
        <hr className="mb-4 w-[900px]" />
        {/* Name and Email Inputs */}
        <div className="flex flex-wrap gap-6 mb-4">
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[424px] h-[56px] px-4 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[424px] h-[56px] px-4 border border-gray-300 rounded-lg focus:outline-none"
            required
          />
        </div>

        {/* Comment Input */}
        <textarea
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-[872px] h-[244px] px-4 border border-gray-300 rounded-lg focus:outline-none mb-4"
          required
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-[#FF9F0D] text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition flex items-center gap-2`}
        >
          <span className="material-icons">send</span>{' '}
          {editingId ? 'Update Comment' : 'Post a Comment'}
        </button>
      </form>

      {/* Comments List */}
      <div>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className=" p-4 mb-4"
          >
            {/* Comment Header */}
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold">{comment.name}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
              </div>
            </div>
            {/* Comment Message */}
            <p className="mb-4">{comment.message}</p>

            {/* Actions: Edit and Delete Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => handleEditComment(comment.id)}
                className="text-[#FF9F0D] hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment3;
