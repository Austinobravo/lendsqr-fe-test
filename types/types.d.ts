export type UserData =  {
    _id: string,
    index: number,
    username: string,
    fullName: string,
    email: string,
    phone: string | number,
    status: string,
    organization: string,
    dateJoined: string,
    bvn: number,
    gender: string,
    maritalStatus: string,
    children: string | number,
    typeOfResidence: string,
    levelOfEducation: string,
    employmentStatus: string,
    sectorOfEmployment: string,
    durationOfEmployment: string,
    officeEmail: string,
    monthlyPay: string,
    loanRepayment: number,
    twitter: string,
    instagram: string,
    facebook: string,
    guarantor: guarantorType[
       {
        id: number,
        name: string,
        phone: string,
        email: string,
        relationship: string
      }
    ]
  }

  export type guarantorType = {
    id: number,
    name: string,
    phone: string,
    email: string,
    relationship: string
  }
