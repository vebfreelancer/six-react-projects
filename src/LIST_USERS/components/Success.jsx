import React from 'react';

export const Success = ({ count, setSuccessClose }) => {
  return (
    <div className="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Successfully!</h3>
      <p>All {count} users were sent an invitation.</p>
      <button onClick={setSuccessClose} className="send-invite-btn">Back</button>
    </div>
  );
};
