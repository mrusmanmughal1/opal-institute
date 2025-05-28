import React from "react";

const MappAddress = () => {
  return (
    <div>
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216173.89467191888!2d73.99980138472786!3d32.1579320898698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2983d520eb29%3A0x6fb33af85e7a368!2sGujranwala%2C%20Pakistan!5e0!3m2!1sen!2s!4v1747128450016!5m2!1sen!2s"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gujranwala Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MappAddress;
