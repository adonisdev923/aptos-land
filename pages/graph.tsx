import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'

import Profile from '../assets/avatar.png'
import DetailIcon from '../assets/details.svg'
import GreenArrow from '../assets/green-arrow.png'
import Monkey from '../assets/Monkey.png'
import Skull from '../assets/Skull.png'
import Whitelines from '../assets/WhitelinesSun.png'
import { Header } from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
const GradientLineChart = dynamic(
  () => import('../components/Charts/GraphPage/GradientLineChart'),
  { ssr: false },
)

const Graph: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aptos | Graph</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex'>
        {/* Sidebar  */}
        <div className='fixed top-0 left-0 h-full bg-white z-[1000]'>
          <Sidebar />
        </div>
        {/* End Sidebar  */}
        {/* Main Area  */}
        <div className='ml-[90px] w-full'>
          <div className='w-full pl-8 transition duration-500'>
            <Header />
            <div className='pr-8 pt-8'>
              <div className='max-w-[1650px] m-auto'>
                {/* ------------------------------------------------------ Profile Section ------------------------------------------------------ */}
                <div className='flex justify-between items-center flex-wrap'>
                  <div className='flex items-center basis-[400px]'>
                    <div className='cursor-pointer px-3 py-3 w-full bg-transparent border rounded-lg text-white border-[#1896894D] flex items-center justify-between'>
                      <span>Aptos</span>
                      <div className='relative'>
                        <svg
                          width='10'
                          height='8'
                          viewBox='0 0 10 8'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.66458 0.875H0.335417C0.0555991 0.875 -0.100645 1.18162 0.0726438 1.39095L4.73723 7.00449C4.87074 7.16517 5.12784 7.16517 5.26277 7.00449L9.92736 1.39095C10.1006 1.18162 9.9444 0.875 9.66458 0.875Z'
                            fill='white'
                            fillOpacity='0.6'
                          />
                        </svg>
                      </div>
                    </div>
                    <button type='button' className='text-white ml-4'>
                      <Image src={DetailIcon} alt='DetailIcon' />
                    </button>
                  </div>
                  <div className='flex items-center'>
                    <button type='button' className='relative'>
                      <svg
                        width='20'
                        height='22'
                        viewBox='0 0 20 22'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 22C11.5177 22 12.7487 20.7689 12.7487 19.25H7.25132C7.25132 20.7689 8.48237 22 10 22ZM19.2551 15.5671C18.4249 14.6751 16.8716 13.3332 16.8716 8.9375C16.8716 5.59883 14.5307 2.92617 11.3742 2.27047V1.375C11.3742 0.615742 10.7589 0 10 0C9.2412 0 8.62589 0.615742 8.62589 1.375V2.27047C5.4694 2.92617 3.12847 5.59883 3.12847 8.9375C3.12847 13.3332 1.57515 14.6751 0.744991 15.5671C0.487178 15.8443 0.372881 16.1756 0.37503 16.5C0.379756 17.2047 0.932764 17.875 1.75433 17.875H18.2457C19.0673 17.875 19.6207 17.2047 19.625 16.5C19.6272 16.1756 19.5129 15.8439 19.2551 15.5671Z'
                          fill='white'
                          fillOpacity='0.8'
                        />
                      </svg>
                      <div className='top-[-4px] right-[-4px] absolute h-[12px] w-[12px] rounded-full bg-white flex items-center justify-center'>
                        <div className='bg-[#FF9703] h-[8px] w-[8px] rounded-full'></div>
                      </div>
                    </button>
                    <div className='w-[1px] h-[40px] mx-6 bg-white/[0.2]'></div>
                    <span className='text-white'>Mertin De</span>
                    <div className='cursor-pointer h-[50px] w-[50px] rounded-full bg-white ml-3 flex items-center justify-center'>
                      <div className='h-[48px] w-[48px] rounded-full bg-black'>
                        <div className='h-[47px] w-[47px] flex items-center justify-center overflow-hidden'>
                          <Image src={Profile} alt='Profile' className='rounded-full' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------------------------------------------------------ Profile Section ------------------------------------------------------ */}
                <div className='pt-8'>
                  <div className='flex p-4 bg-lightblack rounded-[18px] justify-between'>
                    <div className='bg-[#141414] basis-[24.5%] py-8 pl-4 rounded-lg'>
                      <div className='flex items-center'>
                        <Image src={Skull} alt='Skull' />
                        <div className='ml-4'>
                          <span className='text-[#FFFFFFB2] text-[0.813rem]'>Collection</span>
                          <p className='text-[#00DA9D] text-[1.375rem]'>Aptos Undead</p>
                        </div>
                      </div>
                    </div>
                    <div className='bg-[#141414] basis-[24.5%] py-8 pl-4 rounded-lg'>
                      <div className='flex items-center'>
                        <Image src={Monkey} alt='Skull' />
                        <div className='ml-4'>
                          <span className='text-[#FFFFFFB2] text-[0.813rem]'>Collection</span>
                          <p className='text-[#00DA9D] text-[1.375rem]'>Aptos Monkeys</p>
                        </div>
                      </div>
                    </div>
                    <div className='bg-[#141414] basis-[24.5%] py-8 pl-4 rounded-lg'>
                      <div className='flex items-center'>
                        <Image src={Whitelines} alt='Skull' />
                        <div className='ml-4'>
                          <span className='text-[#FFFFFFB2] text-[0.813rem]'>
                            Current floor price
                          </span>
                          <p className='text-[#00DA9D] text-[1.375rem]'>79</p>
                        </div>
                      </div>
                    </div>
                    <div className='bg-[#141414] basis-[24.5%] py-8 pl-4 rounded-lg'>
                      <div className='flex items-center'>
                        <Image src={GreenArrow} alt='Skull' />
                        <div className='ml-4'>
                          <span className='text-[#FFFFFFB2] text-[0.813rem]'>
                            FP change last 24h
                          </span>
                          <p className='text-[#00DA9D] text-[1.375rem]'>+16.4%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pt-8'>
                  <div className='p-4 bg-lightblack rounded-[18px]'>
                    <div className='h-[375px] 2xl:h-[400px]'>
                      <GradientLineChart />
                    </div>
                  </div>
                </div>
                <div className='pt-8 pb-8'>
                  <div className='flex gap-[2%]'>
                    <div className='p-4 bg-lightblack rounded-[18px] basis-[29%]'>
                      <h4 className='text-white text-[1.25rem]'>Floor history</h4>
                      <div className='max-h-[230px] 2xl:max-h-[260px] overflow-y-scroll hide-table-wrap'>
                        <table className='w-full mt-3'>
                          <thead className='bg-[#141414] text-[0.875rem] font-normal text-white rounded-tl-lg rounded-tr-lg'>
                            <tr>
                              <th className='text-left py-2 px-1'>Date</th>
                              <th className='text-left py-2 px-1'>Floor Price</th>
                              <th className='text-right py-2 px-1'>%</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 14, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                77.76 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light py-[6px] px-1'>
                                +18.72%
                              </td>
                            </tr>
                            <tr className='bg-[#1F1F1F29]'>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 13, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                65.5 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light py-[6px] px-1'>
                                +18.72%
                              </td>
                            </tr>
                            <tr>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 12, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                64.48 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light py-[6px] px-1'>
                                +1.58%
                              </td>
                            </tr>
                            <tr className='bg-[#1F1F1F29]'>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 11, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                67.00 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightred font-light'>
                                -3.76%
                              </td>
                            </tr>
                            <tr>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 10, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                77.76 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light'>
                                +12.79%
                              </td>
                            </tr>
                            <tr className='bg-[#1F1F1F29]'>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 11, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                67.00 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightred font-light'>
                                -3.76%
                              </td>
                            </tr>
                            <tr>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 13, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                65.5 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightred font-light'>
                                +18.72%
                              </td>
                            </tr>
                            <tr className='bg-[#1F1F1F29]'>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 13, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                65.5 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light py-[6px] px-1'>
                                +18.72%
                              </td>
                            </tr>
                            <tr>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                Nov 12, 05:29
                              </td>
                              <td className='text-left text-[#FFFFFFB2] text-[0.875rem] font-light py-[6px] px-1'>
                                64.48 Apt
                              </td>
                              <td className='text-right text-[0.875rem] text-lightgreen font-light py-[6px] px-1'>
                                +1.58%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='p-4 bg-lightblack rounded-[18px] basis-[69%]'>
                      <h4 className='text-white text-[1.25rem]'>Expected Index&#40;24h&#41;</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Main Area  */}
        </div>
      </div>
    </div>
  )
}

export default Graph
