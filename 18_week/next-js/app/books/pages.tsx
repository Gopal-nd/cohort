import BookCard from '@/components/BookCard';
import { UseBooks } from '@/hooks/useBooks';

import { Metadata } from 'next';
import React from 'react'


type BookCardProps = {
  id: string;
   volumeInfo: {
    title: string
    authors: string[],
    description: string,
    imageLinks: {
      thumbnail: string;
    }
   },
};

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: 'Best Books Suggestions - OpenToolBox.site', 
      description: 'we have the best books- Welcome to OpenToolBox.site',
      keywords:"first, second, third, fourth, fifth",
      openGraph: {
        title: 'Best Books Suggestions - OpenToolBox.site',
        description: 'we have the best books- Welcome to OpenToolBox.site',
        images: [
          'https://cdn.pixabay.com/photo/2025/05/07/18/46/lake-9585821_1280.jpg',
          "https://cdn.pixabay.com/photo/2025/05/08/11/15/swan-9587142_640.jpg"
        ],
        url: "https://opentoolbox.site/books",
      },
      twitter: {
        card: "summary_large_image",
        creator: "gopalnd",
      }
    }
}

const HomePage = async() => {
  const books = await UseBooks()

  return (
    <div>
      <h1 className='text-4xl font-mono text-center my-2'>Explore the Books</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        books &&  books.map((book:BookCardProps) => (
          <BookCard key={book.id} id={book.id} title={book.volumeInfo.title} authors={book.volumeInfo.authors} thumbnail={book.volumeInfo.imageLinks.thumbnail} />
        ))
      }
    </div>
      </div>
  )
}

export default HomePage