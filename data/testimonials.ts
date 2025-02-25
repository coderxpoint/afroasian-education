export interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    image: string
  }
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "S. Murugan",
      role: "Student",
      quote:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now.",
      image: "/testimonials/student-1.jpg",
    },
    {
      id: 2,
      name: "S. Murugan",
      role: "Student",
      quote:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough.",
      image: "/testimonials/student-2.jpg",
    },
    {
      id: 3,
      name: "S. Murugan",
      role: "Student",
      quote:
        "I've been interested in coding for a while.",
      image: "/testimonials/student-3.jpg",
    },
    {
      id: 4,
      name: "S. Murugan",
      role: "Student",
      quote:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
      image: "/testimonials/student-4.jpg",
    },
   
  ]
  
  