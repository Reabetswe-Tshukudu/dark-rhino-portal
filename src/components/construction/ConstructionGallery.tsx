
export const ConstructionGallery: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <img
        src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=1470&auto=format&fit=crop"
        alt="Housing Development in South Africa"
        className="rounded-lg w-full h-48 object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=1470&auto=format&fit=crop"
        alt="Construction Equipment in South Africa"
        className="rounded-lg w-full h-48 object-cover"
      />
    </div>
  );
};
