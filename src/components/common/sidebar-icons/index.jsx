import * as React from 'react';

function LogoIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={59} height={46} fill="none" {...props}>
      <path
        fill="#4AB2C9"
        d="M22.814 8.556h21.614V0H22.814C15.37 0 9.308 6.082 9.308 13.559v5.719H0l13.572 17.876 13.572-17.876h-9.308v-5.72c0-2.757 2.236-5.002 4.985-5.002h-.007ZM58 26.623 44.428 8.747 30.856 26.623h9.308v5.819c0 2.764-2.23 5.002-4.985 5.002H13.572V46h21.614c7.465 0 13.512-6.068 13.512-13.558v-5.819h9.309H58Z"
      />
    </svg>
  );
}

function MapIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={41} fill="none" {...props}>
      <path
        fill="current"
        d="M16 41s16-14.26 16-24.956C32 7.183 24.837 0 16 0S0 7.183 0 16.044C0 26.739 16 41 16 41Z"
      />
      <path
        fill="#fff"
        d="M21.112 15.375A5.118 5.118 0 0 1 16 20.5a5.118 5.118 0 0 1-5.112-5.125A5.118 5.118 0 0 1 16 10.25a5.118 5.118 0 0 1 5.11 5.125Z"
      />
    </svg>
  );
}

function PathIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
      <rect width={40} height={40} fill="current" rx={6.275} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24.046 7.843 30 15.858m0 0-5.954 8.015M30 15.858H14.314a3.137 3.137 0 0 0-3.137 3.137v12.378"
      />
    </svg>
  );
}

function ArticleIcon(props) {
  return (
    <svg width={42} height={42} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="white"
        d="M3.4583 8.33333L33.8594 38.0131M3.4583 8.33333C4.58941 7.042 6.27883 6.22222 8.16633 6.22222H18.4435M3.4583 8.33333C2.54857 9.37192 2 10.7155 2 12.183V34.0392C2 37.3313 4.76076 40 8.16633 40H30.7762C34.1818 40 36.9425 37.3313 36.9425 34.0392V25.098M18.4435 25.098L5.08316 38.0131M33.0115 8.75556V8.62856M40 8.6087C40 13.0145 33.0115 18.8889 33.0115 18.8889C33.0115 18.8889 26.023 13.0145 26.023 8.6087C26.023 4.95881 29.1518 2 33.0115 2C36.8711 2 40 4.95881 40 8.6087Z"
        stroke="current"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookMarkIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={38} height={34} fill="none" {...props}>
      <path
        fill="current"
        d="M37.392 10.96c0 2.891-1.11 5.668-3.093 7.723-4.564 4.73-8.99 9.662-13.724 14.221a2.735 2.735 0 0 1-3.845-.084L3.092 18.683c-4.123-4.274-4.123-11.172 0-15.446a10.434 10.434 0 0 1 15.108 0l.495.514.496-.513C21.187 1.168 23.905 0 26.745 0s5.558 1.167 7.554 3.237c1.983 2.055 3.093 4.832 3.093 7.723Z"
      />
    </svg>
  );
}

function MyPageIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={43} height={43} fill="none" {...props}>
      <path
        fill="current"
        d="M0 40.564c0-8.455 7.064-15.31 21.5-15.31S43 32.109 43 40.564C43 41.91 42.019 43 40.808 43H2.192C.982 43 0 41.91 0 40.564ZM29.563 8.063a8.062 8.062 0 1 1-16.125 0 8.062 8.062 0 0 1 16.124 0Z"
      />
    </svg>
  );
}

export { LogoIcon, MapIcon, PathIcon, ArticleIcon, BookMarkIcon, MyPageIcon };
