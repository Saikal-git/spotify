"use client";
import React from "react";
import scss from "./Welcome.module.scss";
import { useRouter } from "next/navigation";
import { useFeaturesQuery } from "@/redux/api/tracks";

const Welcome = () => {
  const { data } = useFeaturesQuery();
  console.log("🚀 ~ Welcome ~ data:", data);
  const router = useRouter();

  const features = data?.playlists.items || [];
  console.log("🚀 ~ Welcome ~ features:", features);

  // Функция для удаления HTML-тегов
  const stripHTMLTags = (str: string) => str.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          {features?.map((el, idx) => (
            <div key={idx} className={scss.features}>
              <img src={el.images[0].url} alt="" />
              <h3>{el.name}</h3>
              {/* <p>{stripHTMLTags(el.description)}</p>{" "} */}
              {/* Очистка описания от HTML-тегов */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
