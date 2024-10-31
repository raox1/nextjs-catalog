// src/pages/index.tsx
'use client'
import Link from 'next/link';
import React from 'react';

const topics = [
  { name: 'Routing in Next.js', path: '/topics/routing' },
  { name: 'API Routes', path: '/topics/api-routes' },
  { name: 'Image Optimization', path: '/topics/image-optimization' },
  { name: 'Static Generation (SSG)', path: '/topics/ssg' },
  { name: 'Server-Side Rendering (SSR)', path: '/topics/ssr' },
  { name: 'Dynamic Routing', path: '/topics/dynamic-routing' },
];

const Home: React.FC = () => {
  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold'>Welcome to my Next.js Showcase</h1>
      <p className='mt-4'>Explore Next.js features from basics to advanced.</p>
      
      <table className='mt-6 w-full border-collapse border border-gray-300'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='border border-gray-300 p-2 text-black text-left'>Topic</th>
            <th className='border border-gray-300 p-2 text-black text-left'>Details</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index} className='hover:bg-gray-50'>
              <td className='border border-gray-300 p-2'>
                <Link href={topic.path}>
                  <Link href={""} className='text-blue-600 hover:underline'>{topic.name}</Link>
                </Link>
              </td>
              <td className='border border-gray-300 p-2'>
                <Link href={topic.path}>
                  <Link href={""} className='text-blue-600 hover:underline'>View Details</Link>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
