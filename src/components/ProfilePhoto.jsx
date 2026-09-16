"use client";

import React from "react";
import { motion } from "motion/react";

export function ProfilePhoto({
  src = "/Assets/profile-formal.png",
  alt = "Profile",
  style = {}
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "360px",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
      className="profile-photo-container"
    >
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{
          borderRadius: "1rem",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 20%",
          display: "block",
          ...style,
        }}
      />
    </div>
  );
}

export default ProfilePhoto;
