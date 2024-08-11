import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
// import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#B5DDC2]   ">
      <nav className="font-normal">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center p-4">
          <div className="flex items-center w-full md:w-full">

      <svg width="48" height="51" viewBox="0 0 48 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.1953 17.0991H33.2456V5.12033L44.2221 9.77834V44.1293L47.1799 42.7684V7.43819L30.1953 0.200195V17.0991Z" fill="#1E1E1E"/>
          <path d="M14.1436 30.3702V27.4015H33.2694V45.7131L38.4534 43.4328V10.5176L41.5035 11.9087V45.3171L30.2117 50.1998V30.3702H14.1436Z" fill="#1E1E1E"/>
          <path d="M3.18891 6.34668L0 7.72268L0.107753 42.978L16.7458 50.1937H17.1001V33.2422H14.0344V45.2736L3.18891 40.6746V6.34668Z" fill="#1E1E1E"/>
          <path d="M5.89258 5.09012V38.6108L8.8504 39.8896V7.03427L14.0268 4.84386V22.954H33.0293V20.0752H17.1308V0.230469L5.89258 5.09012Z" fill="#1E1E1E"/>
      </svg>
            {/* <div className="text-black px-3 text-2xl font-bold font">HORIZON</div> */}
            <div class = "p-4">
            <svg width="120" height="22" viewBox="0 0 120 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.06 1.07667V21H12.792V12.2853H3.418V21H0.15V1.07667H3.418V9.61933H12.792V1.07667H16.06ZM28.8762 21.2007C27.0225 21.2007 25.312 20.7707 23.7449 19.9107C22.1969 19.0316 20.9642 17.818 20.0469 16.27C19.1487 14.7029 18.6996 12.9447 18.6996 10.9953C18.6996 9.046 19.1487 7.29733 20.0469 5.74933C20.9642 4.20133 22.1969 2.99733 23.7449 2.13733C25.312 1.25822 27.0225 0.818666 28.8762 0.818666C30.7491 0.818666 32.4596 1.25822 34.0076 2.13733C35.5747 2.99733 36.8074 4.20133 37.7056 5.74933C38.6038 7.29733 39.0529 9.046 39.0529 10.9953C39.0529 12.9447 38.6038 14.7029 37.7056 16.27C36.8074 17.818 35.5747 19.0316 34.0076 19.9107C32.4596 20.7707 30.7491 21.2007 28.8762 21.2007ZM28.8762 18.3627C30.1949 18.3627 31.3702 18.0664 32.4022 17.474C33.4342 16.8624 34.2369 16.0024 34.8102 14.894C35.4027 13.7664 35.6989 12.4669 35.6989 10.9953C35.6989 9.52378 35.4027 8.23378 34.8102 7.12533C34.2369 6.01689 33.4342 5.16644 32.4022 4.574C31.3702 3.98156 30.1949 3.68533 28.8762 3.68533C27.5576 3.68533 26.3822 3.98156 25.3502 4.574C24.3182 5.16644 23.506 6.01689 22.9136 7.12533C22.3402 8.23378 22.0536 9.52378 22.0536 10.9953C22.0536 12.4669 22.3402 13.7664 22.9136 14.894C23.506 16.0024 24.3182 16.8624 25.3502 17.474C26.3822 18.0664 27.5576 18.3627 28.8762 18.3627ZM52.0441 21L47.4574 13.0307H44.9634V21H41.6954V1.07667H48.5754C50.1043 1.07667 51.3943 1.34422 52.4454 1.87933C53.5156 2.41444 54.3087 3.13111 54.8247 4.02933C55.3598 4.92756 55.6274 5.93089 55.6274 7.03933C55.6274 8.33889 55.2452 9.52378 54.4807 10.594C53.7354 11.6451 52.5792 12.3618 51.0121 12.744L55.9427 21H52.0441ZM44.9634 10.422H48.5754C49.7985 10.422 50.7158 10.1162 51.3274 9.50467C51.9581 8.89311 52.2734 8.07133 52.2734 7.03933C52.2734 6.00733 51.9676 5.20467 51.3561 4.63133C50.7445 4.03889 49.8176 3.74267 48.5754 3.74267H44.9634V10.422ZM62.5027 1.07667V21H59.2347V1.07667H62.5027ZM69.3733 18.162H78.6326V21H65.5033V18.4487L74.7339 3.91467H65.5033V1.07667H78.6326V3.628L69.3733 18.162ZM90.719 21.2007C88.8652 21.2007 87.1547 20.7707 85.5876 19.9107C84.0396 19.0316 82.807 17.818 81.8896 16.27C80.9914 14.7029 80.5423 12.9447 80.5423 10.9953C80.5423 9.046 80.9914 7.29733 81.8896 5.74933C82.807 4.20133 84.0396 2.99733 85.5876 2.13733C87.1547 1.25822 88.8652 0.818666 90.719 0.818666C92.5919 0.818666 94.3023 1.25822 95.8503 2.13733C97.4174 2.99733 98.6501 4.20133 99.5483 5.74933C100.447 7.29733 100.896 9.046 100.896 10.9953C100.896 12.9447 100.447 14.7029 99.5483 16.27C98.6501 17.818 97.4174 19.0316 95.8503 19.9107C94.3023 20.7707 92.5919 21.2007 90.719 21.2007ZM90.719 18.3627C92.0376 18.3627 93.213 18.0664 94.245 17.474C95.277 16.8624 96.0796 16.0024 96.653 14.894C97.2454 13.7664 97.5416 12.4669 97.5416 10.9953C97.5416 9.52378 97.2454 8.23378 96.653 7.12533C96.0796 6.01689 95.277 5.16644 94.245 4.574C93.213 3.98156 92.0376 3.68533 90.719 3.68533C89.4003 3.68533 88.225 3.98156 87.193 4.574C86.161 5.16644 85.3487 6.01689 84.7563 7.12533C84.183 8.23378 83.8963 9.52378 83.8963 10.9953C83.8963 12.4669 84.183 13.7664 84.7563 14.894C85.3487 16.0024 86.161 16.8624 87.193 17.474C88.225 18.0664 89.4003 18.3627 90.719 18.3627ZM119.907 21H116.639L106.806 6.122V21H103.538V1.048H106.806L116.639 15.8973V1.048H119.907V21Z" fill="black"/>
            </svg>

            </div>
          
          </div>
          

          <button
            className="md:hidden p-2 text-black absolute right-3 top-5 bg-[#F2C6AB] "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <div
            className={`w-fit md:w-auto flex-col md:flex-row md:flex md:items-start md:space-x-8 ${
              isMenuOpen ? 'flex' : 'hidden'
            }`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 md:items-center">
              <li>
                {/* <button className="bg-[#B5DDC2] text-black p-2 text-xl">About</button> */}
                <button class="bg-[#B5DDC2]">

                <svg width="61" height="16" viewBox="0 0 61 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.88 12.66H4.06L3.06 15.5H0.68L5.66 1.58H8.3L13.28 15.5H10.88L9.88 12.66ZM9.24 10.8L6.98 4.34L4.7 10.8H9.24ZM17.7253 6.12C18.112 5.58667 18.6386 5.15333 19.3053 4.82C19.9853 4.47333 20.7386 4.3 21.5653 4.3C22.5386 4.3 23.4186 4.53333 24.2053 5C24.992 5.46667 25.612 6.13333 26.0653 7C26.5186 7.85333 26.7453 8.83333 26.7453 9.94C26.7453 11.0467 26.5186 12.04 26.0653 12.92C25.612 13.7867 24.9853 14.4667 24.1853 14.96C23.3986 15.44 22.5253 15.68 21.5653 15.68C20.712 15.68 19.952 15.5133 19.2853 15.18C18.632 14.8467 18.112 14.42 17.7253 13.9V15.5H15.4453V0.7H17.7253V6.12ZM24.4253 9.94C24.4253 9.18 24.2653 8.52667 23.9453 7.98C23.6386 7.42 23.2253 7 22.7053 6.72C22.1986 6.42667 21.652 6.28 21.0653 6.28C20.492 6.28 19.9453 6.42667 19.4253 6.72C18.9186 7.01333 18.5053 7.44 18.1853 8C17.8786 8.56 17.7253 9.22 17.7253 9.98C17.7253 10.74 17.8786 11.4067 18.1853 11.98C18.5053 12.54 18.9186 12.9667 19.4253 13.26C19.9453 13.5533 20.492 13.7 21.0653 13.7C21.652 13.7 22.1986 13.5533 22.7053 13.26C23.2253 12.9533 23.6386 12.5133 23.9453 11.94C24.2653 11.3667 24.4253 10.7 24.4253 9.94ZM33.78 15.68C32.74 15.68 31.8 15.4467 30.96 14.98C30.12 14.5 29.46 13.8333 28.98 12.98C28.5 12.1133 28.26 11.1133 28.26 9.98C28.26 8.86 28.5067 7.86667 29 7C29.4933 6.13333 30.1667 5.46667 31.02 5C31.8733 4.53333 32.8267 4.3 33.88 4.3C34.9333 4.3 35.8867 4.53333 36.74 5C37.5933 5.46667 38.2667 6.13333 38.76 7C39.2533 7.86667 39.5 8.86 39.5 9.98C39.5 11.1 39.2467 12.0933 38.74 12.96C38.2333 13.8267 37.54 14.5 36.66 14.98C35.7933 15.4467 34.8333 15.68 33.78 15.68ZM33.78 13.7C34.3667 13.7 34.9133 13.56 35.42 13.28C35.94 13 36.36 12.58 36.68 12.02C37 11.46 37.16 10.78 37.16 9.98C37.16 9.18 37.0067 8.50667 36.7 7.96C36.3933 7.4 35.9867 6.98 35.48 6.7C34.9733 6.42 34.4267 6.28 33.84 6.28C33.2533 6.28 32.7067 6.42 32.2 6.7C31.7067 6.98 31.3133 7.4 31.02 7.96C30.7267 8.50667 30.58 9.18 30.58 9.98C30.58 11.1667 30.88 12.0867 31.48 12.74C32.0933 13.38 32.86 13.7 33.78 13.7ZM51.7339 4.48V15.5H49.4539V14.2C49.0939 14.6533 48.6206 15.0133 48.0339 15.28C47.4606 15.5333 46.8472 15.66 46.1939 15.66C45.3272 15.66 44.5472 15.48 43.8539 15.12C43.1739 14.76 42.6339 14.2267 42.2339 13.52C41.8472 12.8133 41.6539 11.96 41.6539 10.96V4.48H43.9139V10.62C43.9139 11.6067 44.1606 12.3667 44.6539 12.9C45.1472 13.42 45.8206 13.68 46.6739 13.68C47.5272 13.68 48.2006 13.42 48.6939 12.9C49.2006 12.3667 49.4539 11.6067 49.4539 10.62V4.48H51.7339ZM57.4022 6.34V12.44C57.4022 12.8533 57.4955 13.1533 57.6822 13.34C57.8822 13.5133 58.2155 13.6 58.6822 13.6H60.0822V15.5H58.2822C57.2555 15.5 56.4689 15.26 55.9222 14.78C55.3755 14.3 55.1022 13.52 55.1022 12.44V6.34H53.8022V4.48H55.1022V1.74H57.4022V4.48H60.0822V6.34H57.4022Z" fill="#1E1E1E"/>
                </svg>

                </button>
              </li>
              <li>
                <button class="bg-[#B5DDC2]">

                <svg width="64" height="15" viewBox="0 0 64 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.78 2.44V6.52H7.58V8.38H2.78V12.64H8.18V14.5H0.5V0.579999H8.18V2.44H2.78ZM15.2483 12.46L18.3683 3.48H20.7883L16.5883 14.5H13.8683L9.68828 3.48H12.1283L15.2483 12.46ZM32.6117 8.72C32.6117 9.13333 32.5851 9.50667 32.5317 9.84H24.1117C24.1784 10.72 24.5051 11.4267 25.0917 11.96C25.6784 12.4933 26.3984 12.76 27.2517 12.76C28.4784 12.76 29.3451 12.2467 29.8517 11.22H32.3117C31.9784 12.2333 31.3717 13.0667 30.4917 13.72C29.6251 14.36 28.5451 14.68 27.2517 14.68C26.1984 14.68 25.2517 14.4467 24.4117 13.98C23.5851 13.5 22.9317 12.8333 22.4517 11.98C21.9851 11.1133 21.7517 10.1133 21.7517 8.98C21.7517 7.84667 21.9784 6.85333 22.4317 6C22.8984 5.13333 23.5451 4.46667 24.3717 4C25.2117 3.53333 26.1717 3.3 27.2517 3.3C28.2917 3.3 29.2184 3.52667 30.0317 3.98C30.8451 4.43333 31.4784 5.07333 31.9317 5.9C32.3851 6.71333 32.6117 7.65333 32.6117 8.72ZM30.2317 8C30.2184 7.16 29.9184 6.48667 29.3317 5.98C28.7451 5.47333 28.0184 5.22 27.1517 5.22C26.3651 5.22 25.6917 5.47333 25.1317 5.98C24.5717 6.47333 24.2384 7.14667 24.1317 8H30.2317ZM40.4155 3.3C41.2821 3.3 42.0555 3.48 42.7355 3.84C43.4288 4.2 43.9688 4.73333 44.3555 5.44C44.7421 6.14667 44.9355 7 44.9355 8V14.5H42.6755V8.34C42.6755 7.35333 42.4288 6.6 41.9355 6.08C41.4421 5.54667 40.7688 5.28 39.9155 5.28C39.0621 5.28 38.3821 5.54667 37.8755 6.08C37.3821 6.6 37.1355 7.35333 37.1355 8.34V14.5H34.8555V3.48H37.1355V4.74C37.5088 4.28667 37.9821 3.93333 38.5555 3.68C39.1421 3.42667 39.7621 3.3 40.4155 3.3ZM50.5038 5.34V11.44C50.5038 11.8533 50.5971 12.1533 50.7838 12.34C50.9838 12.5133 51.3171 12.6 51.7838 12.6H53.1838V14.5H51.3838C50.3571 14.5 49.5704 14.26 49.0238 13.78C48.4771 13.3 48.2038 12.52 48.2038 11.44V5.34H46.9038V3.48H48.2038V0.74H50.5038V3.48H53.1838V5.34H50.5038ZM59.2852 14.68C58.4185 14.68 57.6385 14.5267 56.9452 14.22C56.2652 13.9 55.7252 13.4733 55.3252 12.94C54.9252 12.3933 54.7118 11.7867 54.6852 11.12H57.0452C57.0852 11.5867 57.3052 11.98 57.7052 12.3C58.1185 12.6067 58.6318 12.76 59.2452 12.76C59.8852 12.76 60.3785 12.64 60.7252 12.4C61.0852 12.1467 61.2652 11.8267 61.2652 11.44C61.2652 11.0267 61.0652 10.72 60.6652 10.52C60.2785 10.32 59.6585 10.1 58.8052 9.86C57.9785 9.63333 57.3052 9.41333 56.7852 9.2C56.2652 8.98667 55.8118 8.66 55.4252 8.22C55.0518 7.78 54.8652 7.2 54.8652 6.48C54.8652 5.89333 55.0385 5.36 55.3852 4.88C55.7318 4.38667 56.2252 4 56.8652 3.72C57.5185 3.44 58.2652 3.3 59.1052 3.3C60.3585 3.3 61.3652 3.62 62.1252 4.26C62.8985 4.88667 63.3118 5.74667 63.3652 6.84H61.0852C61.0452 6.34667 60.8452 5.95333 60.4852 5.66C60.1252 5.36667 59.6385 5.22 59.0252 5.22C58.4252 5.22 57.9652 5.33333 57.6452 5.56C57.3252 5.78667 57.1652 6.08667 57.1652 6.46C57.1652 6.75333 57.2718 7 57.4852 7.2C57.6985 7.4 57.9585 7.56 58.2652 7.68C58.5718 7.78667 59.0252 7.92667 59.6252 8.1C60.4252 8.31333 61.0785 8.53333 61.5852 8.76C62.1052 8.97333 62.5518 9.29333 62.9252 9.72C63.2985 10.1467 63.4918 10.7133 63.5052 11.42C63.5052 12.0467 63.3318 12.6067 62.9852 13.1C62.6385 13.5933 62.1452 13.98 61.5052 14.26C60.8785 14.54 60.1385 14.68 59.2852 14.68Z" fill="#1E1E1E"/>
                </svg>

                </button>

                {/* <button className="bg-[#B5DDC2] text-black p-2 text-xl">Events</button> */}
              </li>

              <li>
                {/* <button className=" px-4 py-2 bg-[#F2C6AB] rounded-full flex items-center gap-2 text-black border-black text-xl hover: p-2 "> */}
                  {/* <span>Technica</span> */}
                {/* </button> */}
                <button class = "px-4 py-5 bg-[#F2C6AB] rounded-full flex items-center gap- border-black hover: p-2 ">
                  <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.48 1.6V3.46H6.78V15.5H4.5V3.46H0.78V1.6H10.48ZM22.4891 9.72C22.4891 10.1333 22.4624 10.5067 22.4091 10.84H13.9891C14.0557 11.72 14.3824 12.4267 14.9691 12.96C15.5557 13.4933 16.2757 13.76 17.1291 13.76C18.3557 13.76 19.2224 13.2467 19.7291 12.22H22.1891C21.8557 13.2333 21.2491 14.0667 20.3691 14.72C19.5024 15.36 18.4224 15.68 17.1291 15.68C16.0757 15.68 15.1291 15.4467 14.2891 14.98C13.4624 14.5 12.8091 13.8333 12.3291 12.98C11.8624 12.1133 11.6291 11.1133 11.6291 9.98C11.6291 8.84667 11.8557 7.85333 12.3091 7C12.7757 6.13333 13.4224 5.46667 14.2491 5C15.0891 4.53333 16.0491 4.3 17.1291 4.3C18.1691 4.3 19.0957 4.52667 19.9091 4.98C20.7224 5.43333 21.3557 6.07333 21.8091 6.9C22.2624 7.71333 22.4891 8.65333 22.4891 9.72ZM20.1091 9C20.0957 8.16 19.7957 7.48667 19.2091 6.98C18.6224 6.47333 17.8957 6.22 17.0291 6.22C16.2424 6.22 15.5691 6.47333 15.0091 6.98C14.4491 7.47333 14.1157 8.14667 14.0091 9H20.1091ZM23.5728 9.98C23.5728 8.84667 23.7995 7.85333 24.2528 7C24.7195 6.13333 25.3595 5.46667 26.1728 5C26.9861 4.53333 27.9195 4.3 28.9728 4.3C30.3061 4.3 31.4061 4.62 32.2728 5.26C33.1528 5.88667 33.7461 6.78667 34.0528 7.96H31.5928C31.3928 7.41333 31.0728 6.98667 30.6328 6.68C30.1928 6.37333 29.6395 6.22 28.9728 6.22C28.0395 6.22 27.2928 6.55333 26.7328 7.22C26.1861 7.87333 25.9128 8.79333 25.9128 9.98C25.9128 11.1667 26.1861 12.0933 26.7328 12.76C27.2928 13.4267 28.0395 13.76 28.9728 13.76C30.2928 13.76 31.1661 13.18 31.5928 12.02H34.0528C33.7328 13.14 33.1328 14.0333 32.2528 14.7C31.3728 15.3533 30.2795 15.68 28.9728 15.68C27.9195 15.68 26.9861 15.4467 26.1728 14.98C25.3595 14.5 24.7195 13.8333 24.2528 12.98C23.7995 12.1133 23.5728 11.1133 23.5728 9.98ZM41.625 4.3C42.465 4.3 43.2117 4.48 43.865 4.84C44.5317 5.2 45.0517 5.73333 45.425 6.44C45.8117 7.14667 46.005 8 46.005 9V15.5H43.745V9.34C43.745 8.35333 43.4983 7.6 43.005 7.08C42.5117 6.54667 41.8383 6.28 40.985 6.28C40.1317 6.28 39.4517 6.54667 38.945 7.08C38.4517 7.6 38.205 8.35333 38.205 9.34V15.5H35.925V0.7H38.205V5.76C38.5917 5.29333 39.0783 4.93333 39.665 4.68C40.265 4.42667 40.9183 4.3 41.625 4.3ZM54.0733 4.3C54.9399 4.3 55.7133 4.48 56.3933 4.84C57.0866 5.2 57.6266 5.73333 58.0133 6.44C58.4 7.14667 58.5933 8 58.5933 9V15.5H56.3333V9.34C56.3333 8.35333 56.0866 7.6 55.5933 7.08C55.0999 6.54667 54.4266 6.28 53.5733 6.28C52.7199 6.28 52.0399 6.54667 51.5333 7.08C51.0399 7.6 50.7933 8.35333 50.7933 9.34V15.5H48.5133V4.48H50.7933V5.74C51.1666 5.28667 51.6399 4.93333 52.2133 4.68C52.7999 4.42667 53.4199 4.3 54.0733 4.3ZM62.2616 3.02C61.8482 3.02 61.5016 2.88 61.2216 2.6C60.9416 2.32 60.8016 1.97333 60.8016 1.56C60.8016 1.14667 60.9416 0.799999 61.2216 0.52C61.5016 0.239999 61.8482 0.0999992 62.2616 0.0999992C62.6616 0.0999992 63.0016 0.239999 63.2816 0.52C63.5616 0.799999 63.7016 1.14667 63.7016 1.56C63.7016 1.97333 63.5616 2.32 63.2816 2.6C63.0016 2.88 62.6616 3.02 62.2616 3.02ZM63.3816 4.48V15.5H61.1016V4.48H63.3816ZM65.215 9.98C65.215 8.84667 65.4417 7.85333 65.895 7C66.3617 6.13333 67.0017 5.46667 67.815 5C68.6283 4.53333 69.5617 4.3 70.615 4.3C71.9483 4.3 73.0483 4.62 73.915 5.26C74.795 5.88667 75.3883 6.78667 75.695 7.96H73.235C73.035 7.41333 72.715 6.98667 72.275 6.68C71.835 6.37333 71.2817 6.22 70.615 6.22C69.6817 6.22 68.935 6.55333 68.375 7.22C67.8283 7.87333 67.555 8.79333 67.555 9.98C67.555 11.1667 67.8283 12.0933 68.375 12.76C68.935 13.4267 69.6817 13.76 70.615 13.76C71.935 13.76 72.8083 13.18 73.235 12.02H75.695C75.375 13.14 74.775 14.0333 73.895 14.7C73.015 15.3533 71.9217 15.68 70.615 15.68C69.5617 15.68 68.6283 15.4467 67.815 14.98C67.0017 14.5 66.3617 13.8333 65.895 12.98C65.4417 12.1133 65.215 11.1133 65.215 9.98ZM76.8072 9.94C76.8072 8.83333 77.0339 7.85333 77.4872 7C77.9539 6.14667 78.5805 5.48667 79.3672 5.02C80.1672 4.54 81.0472 4.3 82.0072 4.3C82.8739 4.3 83.6272 4.47333 84.2672 4.82C84.9205 5.15333 85.4405 5.57333 85.8272 6.08V4.48H88.1272V15.5H85.8272V13.86C85.4405 14.38 84.9139 14.8133 84.2472 15.16C83.5805 15.5067 82.8205 15.68 81.9672 15.68C81.0205 15.68 80.1539 15.44 79.3672 14.96C78.5805 14.4667 77.9539 13.7867 77.4872 12.92C77.0339 12.04 76.8072 11.0467 76.8072 9.94ZM85.8272 9.98C85.8272 9.22 85.6672 8.56 85.3472 8C85.0405 7.44 84.6339 7.01333 84.1272 6.72C83.6205 6.42667 83.0739 6.28 82.4872 6.28C81.9005 6.28 81.3539 6.42667 80.8472 6.72C80.3405 7 79.9272 7.42 79.6072 7.98C79.3005 8.52667 79.1472 9.18 79.1472 9.94C79.1472 10.7 79.3005 11.3667 79.6072 11.94C79.9272 12.5133 80.3405 12.9533 80.8472 13.26C81.3672 13.5533 81.9139 13.7 82.4872 13.7C83.0739 13.7 83.6205 13.5533 84.1272 13.26C84.6339 12.9667 85.0405 12.54 85.3472 11.98C85.6672 11.4067 85.8272 10.74 85.8272 9.98Z" fill="#1E1E1E"/>
                  </svg>
                </button>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
