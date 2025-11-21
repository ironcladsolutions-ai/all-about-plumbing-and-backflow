import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  text: string;
  author: string;
  rating: number;
}

const reviews: Review[] = [
  {
    text: '"Ralph was amazing to work with. We called with a slight emergent situation on Thursday afternoon and he responded immediately. He was at our location first thing Friday morning and we were able to operate as normal while he provided services. Very Friendly and professional, would highly recommend. Thank you!"',
    author: "Pueblo Dental Services",
    rating: 5,
  },
  {
    text: '"Best in town by far! Fast and fair with great work. Highly recommend. Ralph and Miguel were professional and went above and beyond to get our plumbing problems resolved."',
    author: "Rachel Lawler",
    rating: 5,
  },
  {
    text: '"Ralph was outstanding during the week we fought with my insurance company. He constantly kept me updated and had very quick response times. I highly recommend this company."',
    author: "Colan Cole",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 lg:py-24 px-6" data-testid="section-reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Trusted by hundreds of satisfied customers across Pueblo and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="p-8 border-l-4 border-l-amber-400"
              data-testid={`card-review-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                    data-testid={`star-${index}-${i}`}
                  />
                ))}
              </div>
              <p className="text-base text-muted-foreground mb-6 italic leading-relaxed">
                {review.text}
              </p>
              <p className="font-semibold text-primary">
                {review.author}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
