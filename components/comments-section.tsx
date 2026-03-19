export function CommentsSection() {
  const comments = [
    {
      name: "Jamie L.",
      title: "UX Lead",
      date: "July 14, 2023",
      text: "OMG 🙌 Asha is the ✨design queen✨. She turned our chaotic nav project into something users actually love. Still shook tbh.",
      avatar: "👤",
    },
    {
      name: "Marcus R.",
      title: "Product Manager",
      date: "March 2, 2022",
      text: "Asha = clutch. Always keeps the team on track, fights for the user 💯, and makes the product look 🔥. Can we clone her??",
      avatar: "👤",
    },
    {
      name: "Priya S.",
      title: "Front-End Engineer",
      date: "November 19, 2021",
      text: "Asha's specs >>> anyone else's. 😂 Saved me so much dev time. Plus she actually listens to engineers (rare, I know).",
      avatar: "👤",
    },
    {
      name: "Chris B.",
      title: "Design Director",
      date: "August 5, 2023",
      text: "Low-key, Asha's the reason half our projects launched on time. Vision + vibes + execution = unmatched. 🔥🔥🔥",
      avatar: "👤",
    },
    {
      name: "Samantha G.",
      title: "Former Manager",
      date: "May 23, 2020",
      text: "Asha has Big Aries Energy ♈. Bold, decisive, and makes every design review actually fun. 🚀 10/10 would hire again.",
      avatar: "👤",
    },
  ]

  return (
    <div className="bg-card border-2 border-primary/20 rounded-lg p-6 mt-6">
      <h2 className="font-serif text-2xl font-bold text-primary mb-4 retro-text-shadow">Comments</h2>

      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-white/90 border border-gray-300 rounded-md p-4 hover:shadow-lg hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center text-lg border border-gray-300">
                  {comment.avatar}
                </div>
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                {/* Username and Title */}
                <div className="mb-1">
                  <span className="font-bold text-primary group-hover:text-pink-600 transition-colors">
                    {comment.name}
                  </span>
                  <span className="text-gray-600 text-sm ml-2">— {comment.title}</span>
                </div>

                {/* Date */}
                <div className="text-xs text-gray-500 mb-2">Posted on {comment.date}</div>

                {/* Comment Text */}
                <div className="text-gray-800 leading-relaxed group-hover:text-gray-900 transition-colors">
                  "{comment.text}"
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
