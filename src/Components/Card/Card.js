import React from "react";
import "./Card.css";

export default function Card({ cardDetails }) {
  const { id, userObj, title, priority, tag } = cardDetails;

  return (
    <div className="card-container">
      <div className="card-id-wrapper">
        <div className="card-id">{id}</div>
        <div className="card-profile">
          <div className="card-profile-initial">
            {userObj.name[0]}
            {userObj.name[1]}
          </div>
          <div
            className={`card-profile-initial-available ${
              userObj.available ? "card-profile-initial-available-true" : ""
            }`}
          ></div>
        </div>
      </div>

      <div className="card-title">{title}</div>

      <div className="card-tag">
        {(() => {
          switch (priority) {
            case 0:
              return (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"
                    />
                  </svg>
                </div>
              );
            case 1:
              return (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z"
                        clipRule="evenodd"
                      />
                      <path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                    </g>
                  </svg>
                </div>
              );
            case 2:
              return (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                      <path
                        fillRule="evenodd"
                        d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z"
                        clipRule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              );
            case 3:
              return (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="currentColor"
                      d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"
                    />
                  </svg>
                </div>
              );
            case 4:
              return (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="red"
                      d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </div>
              );
            default:
              return null;
          }
        })()}

        {tag.map((item, index) => (
          <div key={index} className="card-tag-box">
            <div className="card-tag-title">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
