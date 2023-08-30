/* eslint-disable react/jsx-key */
import AvailableBookCard from "../../Home/AvailableBooks/AvailableBookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const SimilarBooks = () => {
  const [demoData, setDemoData] = useState([
    {
      title: "The Catcher in the Rye",
      image: "book_cover1.jpg",
      author_name: "J.D. Salinger",
      publisher_name: "Little, Brown and Company",
      genre: "Literary Fiction",
      class_level: "High School",
      faculty_name: "Faculty of Language and Literature",
      quantity: 10,
      description:
        "A classic novel about a teenage boy's experiences in New York City.",
      price: "19",
      is_sale: false,
      Last_edition: "2022",
      shop: "shop123",
      userEmail: "user@example.com",
      reviews: ["Great book!", "Highly recommended."],
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      image: "book_cover2.jpg",
      author_name: "J.K. Rowling",
      publisher_name: "Scholastic",
      genre: "Fantasy",
      class_level: "Middle Grade",
      faculty_name: "Faculty of Arts",
      quantity: 25,
      description: "The first book in the popular Harry Potter series.",
      price: "14",
      is_sale: true,
      Last_edition: "2021",
      shop: "shop456",
      userEmail: "user2@example.com",
      reviews: ["Magical adventure!", "Must-read for all ages."],
    },
    {
      title: "To Kill a Mockingbird",
      image: "book_cover3.jpg",
      author_name: "Harper Lee",
      publisher_name: "J. B. Lippincott & Co.",
      genre: "Classic Literature",
      class_level: "High School",
      faculty_name: "Faculty of Language and Literature",
      quantity: 8,
      description:
        "A powerful novel dealing with racial injustice in the American South.",
      price: "17",
      is_sale: false,
      Last_edition: "2020",
      shop: "shop789",
      userEmail: "user3@example.com",
      reviews: ["Timeless masterpiece!", "Eye-opening and thought-provoking."],
    },
    {
      title: "Pirates",
      image: "book_cover4.jpg",
      author_name: "George Orwell",
      publisher_name: "Secker & Warburg",
      genre: "Science Fiction",
      class_level: "University",
      faculty_name: "Faculty of Social Sciences",
      quantity: 12,
      description:
        "A dystopian novel depicting a totalitarian regime and surveillance society.",
      price: "21",
      is_sale: true,
      Last_edition: "2023",
      shop: "shop101",
      userEmail: "user4@example.com",
      reviews: [
        "Disturbingly relevant.",
        "A cautionary tale for the modern age.",
      ],
    },
    {
      title: "Pride and Prejudice",
      image: "book_cover5.jpg",
      author_name: "Jane Austen",
      publisher_name: "T. Egerton, Whitehall",
      genre: "Romance",
      class_level: "College",
      faculty_name: "Faculty of Arts",
      quantity: 15,
      description:
        "A classic romance novel exploring social class and relationships.",
      price: "12",
      is_sale: false,
      Last_edition: "2021",
      shop: "shop234",
      userEmail: "user5@example.com",
      reviews: [
        "Timeless love story.",
        "Jane Austen's brilliance shines through.",
      ],
    },
  ]);
  // console.log("demoData", demoData);

  //   useEffect(() => {
  //     async function fetchDemoData() {
  //       try {
  //         const response = await fetch("DemoData/book.json"); // Fetch data from public folder
  //         const data = await response.json();
  //         setDemoData(data);
  //       } catch (error) {
  //         console.error("Error fetching demo data:", error);
  //       }
  //     }

  //     fetchDemoData();
  //   }, []);

  return (
    <div>
      <Swiper
        width={848}
        slidesPerView={1}
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {demoData?.map((book, i) => (
          <SwiperSlide>
            <AvailableBookCard book={book} key={i}></AvailableBookCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarBooks;
