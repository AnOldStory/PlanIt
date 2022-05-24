import React, { useState } from "react";

import github from "./github.jpg";
import docker from "./docker.jpg";

import inject from "./inject.png";
import inject_img from "./원본.png";

const Team = () => {
  const [loading, setLoading] = useState(0);
  const [part, setPart] = useState(0);
  const info = [
    {
      title: "JS-Injection 제작하기",
      desc: "JS-Injection 프로젝트를 제작해보고 익혀봅니다.",
      user: [inject_img],
    },
    {
      title: "Github 스터디",
      desc: " Git을 배우고 익히는 초급 프로젝트입니다.",
      user: [github],
    },
    {
      title: "Docker 스터디",
      desc: " Docker을 배우고 익히는 중급 프로젝트입니다.",
      user: [docker],
    },
  ];
  return (
    <>
      {loading === 0 ? (
        <section>
          <header class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div class="flex items-center justify-between">
              <h2 class="font-semibold text-slate-900">Projects</h2>
              <a
                href="/new"
                class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2"
                  aria-hidden="true"
                >
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New
              </a>
            </div>
            <form class="group relative">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Filter projects"
                placeholder="Filter projects..."
              />
            </form>
          </header>
          <ul class="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
            {info.map((item, index) => (
              <a
                href="#"
                class="hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm"
                onClick={() => setLoading(1)}
              >
                <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                  <div>
                    <dt class="sr-only">Title</dt>
                    <dd class="group-hover:text-white font-semibold text-slate-900">
                      {item.title}
                    </dd>
                  </div>
                  <div>
                    <dt class="sr-only">Category</dt>
                    <dd class="group-hover:text-blue-200">{item.desc}</dd>
                  </div>
                  <div class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt class="sr-only">item</dt>
                    {item.user.map((img, index) => (
                      <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                        <img
                          src={img}
                          alt="user.name"
                          class="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                          loading="lazy"
                        />
                      </dd>
                    ))}
                  </div>
                </dl>
              </a>
            ))}

            {/* end block  */}
            <li class="flex">
              <a
                href="#"
                class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
              >
                <svg
                  class="group-hover:text-blue-500 mb-1 text-slate-400"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                </svg>
                New project
              </a>
            </li>
          </ul>
        </section>
      ) : (
        <>
          <main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
              <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                  JS-injection 제작하기
                </h1>
                <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
                  중급
                </p>
              </div>
              <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                <img
                  src={inject}
                  alt=""
                  class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                  loading="lazy"
                />
              </div>
              <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt class="sr-only">Reviews</dt>
                <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    class="mr-1 stroke-current dark:stroke-indigo-500"
                  >
                    <path
                      d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>
                    4.89
                    {/* <span class="text-slate-400 font-normal">(128)</span> */}
                  </span>
                </dd>
                {/* <dt class="sr-only">Location</dt>
                <dd class="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    aria-hidden="true"
                    fill="currentColor"
                    class="mx-3 text-slate-300"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="mr-1 text-slate-400 dark:text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  Collingwood, Ontario
                </dd> */}
              </dl>
              {part === 0 ? (
                <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
                  <button
                    type="button"
                    class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
                    onClick={() => setPart(1)}
                  >
                    참여하기
                  </button>
                </div>
              ) : (
                ""
              )}
              <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                - 참여자 목록 -
                <div class="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
                  <div class="relative">
                    <img
                      class="w-40 h-40 rounded-md object-cover"
                      src="https://api.lorem.space/image/face?w=150&h=150"
                      alt="User"
                    />

                    <div
                      class="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
                      title="User is online"
                    ></div>
                  </div>

                  <div class="flex flex-col px-6">
                    <div class="flex h-8 flex-row">
                      <a
                        href="https://github.com/EgoistDeveloper/"
                        target="_blank"
                      >
                        <h2 class="text-lg font-semibold">Kang Taeho</h2>
                      </a>

                      <svg
                        class="my-auto ml-2 h-5 fill-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                      </svg>
                    </div>

                    <div class="my-2 flex flex-row space-x-2">
                      <div class="flex flex-row">
                        <svg
                          class="mr-2 h-4 w-4 fill-gray-500/80"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                        </svg>

                        <div class="text-xs text-gray-400/80 hover:text-gray-400">
                          Frontend Developer
                        </div>
                      </div>

                      <div class="flex flex-row">
                        <svg
                          class="mr-2 h-4 w-4 fill-gray-500/80"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                        </svg>

                        <div class="text-xs text-gray-400/80 hover:text-gray-400">
                          who@am.i
                        </div>
                      </div>
                    </div>

                    <div class="mt-2 flex flex-row items-center space-x-5">
                      <a
                        href="#"
                        class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                      >
                        <div class="flex flex-row items-center justify-center">
                          <svg
                            class="mr-3 fill-gray-500/95"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                          </svg>

                          <span class="font-bold text-gray-600"> 5.6K </span>
                        </div>

                        <div class="mt-2 text-sm text-gray-400"> 커밋수 </div>
                      </a>

                      <a
                        href="#"
                        class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                      >
                        <div class="flex flex-row items-center justify-center">
                          <svg
                            class="mr-3 fill-gray-500/95"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
                          </svg>

                          <span class="font-bold text-gray-600"> 45 </span>
                        </div>

                        <div class="mt-2 text-sm text-gray-400">
                          프로젝트 수
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {part === 1 && (
                  <div class="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
                    <div class="relative">
                      <img
                        class="w-40 h-40 rounded-md object-cover"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                        alt="User"
                      />

                      <div
                        class="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
                        title="User is online"
                      ></div>
                    </div>

                    <div class="flex flex-col px-6">
                      <div class="flex h-8 flex-row">
                        <a
                          href="https://github.com/EgoistDeveloper/"
                          target="_blank"
                        >
                          <h2 class="text-lg font-semibold">HyeongChang Lee</h2>
                        </a>

                        <svg
                          class="my-auto ml-2 h-5 fill-blue-400"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
                        </svg>
                      </div>

                      <div class="my-2 flex flex-row space-x-2">
                        <div class="flex flex-row">
                          <svg
                            class="mr-2 h-4 w-4 fill-gray-500/80"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                          </svg>

                          <div class="text-xs text-gray-400/80 hover:text-gray-400">
                            Backend Developer
                          </div>
                        </div>

                        <div class="flex flex-row">
                          <svg
                            class="mr-2 h-4 w-4 fill-gray-500/80"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
                          </svg>

                          <div class="text-xs text-gray-400/80 hover:text-gray-400">
                            who@am.i
                          </div>
                        </div>
                      </div>

                      <div class="mt-2 flex flex-row items-center space-x-5">
                        <a
                          href="#"
                          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                        >
                          <div class="flex flex-row items-center justify-center">
                            <svg
                              class="mr-3 fill-gray-500/95"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                            </svg>

                            <span class="font-bold text-gray-600"> 768 </span>
                          </div>

                          <div class="mt-2 text-sm text-gray-400"> 커밋수 </div>
                        </a>

                        <a
                          href="#"
                          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                        >
                          <div class="flex flex-row items-center justify-center">
                            <svg
                              class="mr-3 fill-gray-500/95"
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M2.5 19.6L3.8 20.2V11.2L1.4 17C1 18.1 1.5 19.2 2.5 19.6M15.2 4.8L20.2 16.8L12.9 19.8L7.9 7.9V7.8L15.2 4.8M15.3 2.8C15 2.8 14.8 2.8 14.5 2.9L7.1 6C6.4 6.3 5.9 7 5.9 7.8C5.9 8 5.9 8.3 6 8.6L11 20.5C11.3 21.3 12 21.7 12.8 21.7C13.1 21.7 13.3 21.7 13.6 21.6L21 18.5C22 18.1 22.5 16.9 22.1 15.9L17.1 4C16.8 3.2 16 2.8 15.3 2.8M10.5 9.9C9.9 9.9 9.5 9.5 9.5 8.9S9.9 7.9 10.5 7.9C11.1 7.9 11.5 8.4 11.5 8.9S11.1 9.9 10.5 9.9M5.9 19.8C5.9 20.9 6.8 21.8 7.9 21.8H9.3L5.9 13.5V19.8Z" />
                            </svg>

                            <span class="font-bold text-gray-600"> 3 </span>
                          </div>

                          <div class="mt-2 text-sm text-gray-400">
                            프로젝트 수
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </p>
            </div>
          </main>
        </>
      )}
    </>
  );
};
export default Team;
