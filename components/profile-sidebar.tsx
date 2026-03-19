import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, FileText, Heart, Star } from "lucide-react"
import Image from "next/image"
import { CurrentlyVibingPlayer } from "./currently-vibing-player"

export function ProfileSidebar() {
  const topCaseStudies = [
    { id: 1, title: "E-commerce Redesign", image: "/placeholder-0xyjs.png" },
    { id: 2, title: "Mobile Banking App", image: "/banking-app-interface.png" },
    { id: 3, title: "Healthcare Dashboard", image: "/healthcare-dashboard-ui.jpg" },
    { id: 4, title: "Travel Booking Platform", image: "/travel-booking-app.jpg" },
  ]

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="p-6 bg-card border-2 border-primary/20 retro-border">
        <div className="flex flex-col items-center md:items-start md:pl-5 pt-4">
          {/* Profile Picture */}
          <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-lg overflow-hidden border-2 border-[#FF4FB0] shadow-lg">
            <Image
              src="/images/design-mode/photo.png"
              alt="Asha Jones - UX Designer"
              fill
              quality={100}
              priority
              className="object-cover object-[center_20%]"
            />
          </div>

          {/* Name Caption */}
          <div className="mt-1.5 text-center md:text-left">
            <p
              className="font-bold text-sm md:text-base font-retro text-primary"
              style={{
                textShadow: "0 0 8px rgba(255, 79, 176, 0.4), 0 0 12px rgba(255, 79, 176, 0.2)",
              }}
            >
              Asha Jones | UX Designer
            </p>
          </div>
        </div>

        <div className="text-center space-y-4 md:pl-5 md:mt-8">
          {/* About Me Blurb */}
          <div className="text-sm text-foreground bg-muted p-3 rounded border border-border">
            <p className="font-retro">"Crafting digital experiences that make people smile since 2019 ✨"</p>
          </div>

          {/* Mood */}
          <div className="text-xs text-muted-foreground font-retro">Mood: Creative & Caffeinated ☕</div>

          {/* Contact Links */}
          <div className="flex justify-center gap-2 md:justify-start">
            <Button size="sm" variant="outline" className="sparkle-hover bg-transparent">
              <Mail className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="sparkle-hover bg-transparent">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" className="sparkle-hover bg-transparent">
              <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Updated Contact section */}
      <Card className="p-4 bg-card border-2 border-primary/20">
        <h3 className="font-retro text-lg font-bold text-primary mb-1">Contacting Asha</h3>

        {/* Contact Options - only Send Message */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary p-2 rounded cursor-pointer transition-colors sparkle-hover">
            <span className="text-base">💌</span>
            <span className="font-retro">Send Message</span>
          </div>
        </div>
      </Card>

      <div className="w-full max-w-sm mx-auto">
        <div className="bg-[#F5E6D3] rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#E91E8C] mb-6">Asha's Details</h2>

          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Status:</span>
              <span className="text-base font-semibold text-gray-800">Designing experiences ✨</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Here for:</span>
              <span className="text-base font-semibold text-gray-800">UX strategy + systems</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Hometown:</span>
              <span className="text-base font-semibold text-gray-800">Harrisburg, PA → open to NYC/DC 🏙️🏛️</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Zodiac:</span>
              <span className="text-base font-semibold text-gray-800">Aries ♈</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Coffee:</span>
              <span className="text-base font-semibold text-gray-800">Always ☕</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#E91E8C]">Occupation:</span>
              <span className="text-base font-semibold text-gray-800">Senior UX Designer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top 4 Case Studies */}
      <Card className="p-4 bg-card border-2 border-primary/20">
        <h3 className="font-retro text-lg font-bold text-primary mb-3 flex items-center gap-2">
          <Star className="w-5 h-5" />
          Top 4 Projects
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {topCaseStudies.map((study) => (
            <div key={study.id} className="text-center sparkle-hover cursor-pointer">
              <div className="relative w-16 h-16 mx-auto mb-2 rounded border border-border overflow-hidden">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              </div>
              <p className="text-xs font-retro text-foreground">{study.title}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Music Section */}
      <CurrentlyVibingPlayer />

      {/* Friends/Connections */}
      <Card className="p-4 bg-card border-2 border-primary/20">
        <h3 className="font-retro text-lg font-bold text-primary mb-3 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Design Friends
        </h3>
        <div className="flex flex-wrap gap-2">
          {["Sarah", "Mike", "Jenny", "David", "Lisa", "Tom"].map((friend) => (
            <span key={friend} className="text-xs bg-muted px-2 py-1 rounded font-retro sparkle-hover cursor-pointer">
              {friend}
            </span>
          ))}
        </div>
      </Card>
    </div>
  )
}
