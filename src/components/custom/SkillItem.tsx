interface SkillItemProps {
  imgSrc: string;
  altText: string;
  name: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ imgSrc, altText, name }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={altText} className="h-12 w-12" />
      <span className="mt-2 text-xs text-gray-300">{name}</span>
    </div>
  );
};
export default SkillItem;