import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";


export default function Footercom() {
    return (
        <Footer container className='bordr border-t-8 border-teal-500'>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="">
                        <Link to="/" className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" ><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">AB&#39;Sahand&apos;s</span>Blog</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-6 sm:mt-0 sm:grid-cols-3 sm:gap-6">
                        <div className="">
                            <Footer.Title title='About' className='mb-2 sm:mb-3' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>Bloging</Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>AB&#39;Sahand&apos;s</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title title='Follow Us' className='mb-2 sm:mb-3' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>GitHub</Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div className="">
                            <Footer.Title title='legal' className='mb-2 sm:mb-3' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>Privacy Policy</Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col>
                                <Footer.Link href='/'>Term & Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href='#' by="AB-Sahand's Blog" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='#' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
