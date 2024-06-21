import { HiOutlineUsers } from 'react-icons/hi2'
import { PiScrollFill, PiUsersThreeFill } from 'react-icons/pi'
import { TbMoneybag, TbRosetteDiscount } from 'react-icons/tb'
import { FaCoins, FaRegHandshake, FaUserCheck, FaUserCog, FaUserTimes } from 'react-icons/fa'
import { GiReceiveMoney, GiSpiralTentacle } from 'react-icons/gi'
import { FcSettings, FcStatistics } from 'react-icons/fc'
import { VscSettings } from 'react-icons/vsc'
import { FaBriefcase } from 'react-icons/fa6'


import { AiOutlineAudit } from 'react-icons/ai'
import {  BsHouseHeart } from 'react-icons/bs'
import {  MdOutlinePhonelinkSetup, MdOutlineSavings } from 'react-icons/md'
export const SidebarContents = [
    {
        title: "CUSTOMERS",
        downline: [
            {
                icon: HiOutlineUsers,
                title: "Users",
                path: ""
            },
            {
                icon: PiUsersThreeFill,
                title: "Guarantors",
                path: "/dashboard/guarantors"
            },
            {
                icon: TbMoneybag,
                title: "Loans",
                path: "/dashboard/loans"
            },
            {
                icon: FaRegHandshake,
                title: "Decision Models",
                path: "/dashboard/decision_models"
            },
            {
                icon: MdOutlineSavings,
                title: "Savings",
                path: "/dashboard/savings"
            },
            {
                icon: GiReceiveMoney,
                title: "Loan Request",
                path: "/dashboard/loan_request"
            },
            {
                icon: FaUserCheck,
                title: "Whitelist",
                path: "/dashboard/whitelist"
            },
            {
                icon: FaUserTimes,
                title: "Karma",
                path: "/dashboard/karma"
            },
        ]
    },
    {
        title: "BUSINESSES",
        downline: [
            {
                icon: FaBriefcase,
                title: "Organization",
                path: "/dashboard/organization"
            },
            {
                icon: GiReceiveMoney,
                title: "Loan Products",
                path: "/dashboard/loan_products"
            },
            {
                icon: BsHouseHeart,
                title: "Savings Products",
                path: "/dashboard/savings_products"
            },
            {
                icon: FaCoins,
                title: "Fees and Charges",
                path: "/dashboard/fees_and_charges"
            },
            {
                icon: MdOutlinePhonelinkSetup,
                title: "Transactions",
                path: "/dashboard/transactions"
            },
            {
                icon: GiSpiralTentacle,
                title: "Services",
                path: "/dashboard/services"
            },
            {
                icon: FaUserCog,
                title: "Service Account",
                path: "/dashboard/service_account"
            },
            {
                icon: PiScrollFill,
                title: "Settlements",
                path: "/dashboard/settlements"
            },
            {
                icon: FcStatistics,
                title: "Reports",
                path: "/dashboard/reports"
            },
        ]
    },
    {
        title: "SETTINGS",
        downline: [
            {
                icon: VscSettings,
                title: "Preferences",
                path: "/dashboard/prefernces"
            },
            {
                icon: TbRosetteDiscount,
                title: "Fees and Pricing",
                path: "/dashboard/fees_and_pricing"
            },
            {
                icon: AiOutlineAudit,
                title: "Audit Logs",
                path: "/dashboard/audit"
            },
            {
                icon: FcSettings,
                title: "System Messages",
                path: "/dashboard/system_messages"
            },
        ]
    },
   
  ]