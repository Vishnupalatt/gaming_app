import React from "react";
import { FaFire } from "react-icons/fa";
import CharacterPng1 from "../assets/characters/character1.png";
import Game3 from "../assets/game/game3.jpg";
import Game4 from "../assets/game/game4.png"
import Game5 from "../assets/game/game5.webp"
import Game6 from "../assets/game/game6.webp"
import Game7 from "../assets/game/game7.jpg"
import Game8 from "../assets/game/game8.jpeg"

const GameCardData = [
  {
    id: 1,
    title: "Game Title",
    image: Game4,
    followers: 30,
  },
  {
    id: 2,
    title: "Game Title 2",
    image: Game7,
    followers: 35,
  },
  {
    id: 3,
    title: "Game Title 3",
    image: Game5,
    followers: 35,
  },
  {
    id: 4,
    title: "Game Title 4",
    image: Game3,
    followers: 35,
  },
  {
    id: 5,
    title: "Game Title 5",
    image: Game8,
    followers: 35,
  },
  {
    id: 6,
    title: "Game Title 6",
    image: Game6,
    followers: 55,
  },
];
const TrendingGames = () => {
  return (
    <>
      <section className="py-10 bg-primary text-white">
        <div className="container relative">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold"> Trending Games</h1>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              View All
            </button>
          </div>
          {/* Trending Games Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              {/* Game Card */}
              {GameCardData.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] object-cover rounded-xl"
                    />
                    <div className="text-center">
                      <p>{item.title}</p>
                      <p className="flex items-center justify-center gap-2">
                        <FaFire />
                        <span>{item.followers}</span> followers
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Character Png */}
          <img
            src={CharacterPng1}
            alt="not found"
            className="absolute left-[-120px] top-0 z-[1] h-[340px]"
          />
        </div>
      </section>
    </>
  );
};

export default TrendingGames;