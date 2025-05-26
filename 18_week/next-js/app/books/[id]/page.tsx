import React from 'react'
import type { Metadata } from 'next'
import { UseBookById } from '@/hooks/useBookById'
import BookDetails from '@/components/BookDetails'
import { UseBooks } from '@/hooks/useBooks'
 

type Params = Promise<{ id: string }>

export async function generateMetadata(props:{params:Params}): Promise<Metadata> {
   const params = await props.params
    const id = Number(params.id)

  const book = await UseBookById(id)
 
  return {
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
     keywords:"first, second, third, fourth, fifth",
      openGraph: {
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
        images: [
          book.volumeInfo.imageLinks.thumbnail         
        ],
        url: `https://opentoolbox.site/books/${id}`,
      },
      twitter: {
        card: "summary_large_image",
        creator: "gopalnd",
      }

  }
}

export const revalidate = 8600   // for the revalidation of the cache / refresh the cache every 24 hourse
 
export async function generateStaticParams() {
  const books = await UseBooks()
  console.log(books.map((book:any) => book.id))
  return [ 2,  9, 19, 43,  57].map((book:any) => (
   { id: book.toString()}
  ))
  
}


// any one among this two methods can be used

// export async function generateStaticParams() {
// return []
// }

const BookById = async (props:{params:Params}) => {
    
    const params = await props.params
    const id = Number(params.id    )
    const book = await UseBookById(id)
   
 
  return (
    <BookDetails  id={id} volumeInfo={book.volumeInfo} />
  )
}

export default BookById