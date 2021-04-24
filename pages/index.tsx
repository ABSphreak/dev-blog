import Head from 'next/head';
import Link from 'next/link';
import { Loader } from '../components/Loader';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Loader show />
    </div>
  );
}
