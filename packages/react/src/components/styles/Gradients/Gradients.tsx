import { gradientVariants, GradientVariantsProps } from './Gradient.styles';

export type GradientsProps = {
  type?: GradientVariantsProps['type'];
  className?: string;
};

export default function Gradients({ type = 'linear-to-r', className }: GradientsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="border border-dotted p-4 rounded-2xl w-70">
        <code>gradient-shimmer</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-shimmer',
          })}
        />
      </div>

      <div className="border border-dotted p-4 rounded-2xl w-70">
        <code>gradient-spinner-blue</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-spinner-blue',
          })}
        />
      </div>

      <div className="bg-background-invert-primary border border-dotted p-4 rounded-2xl w-70">
        <code className="text-text-and-icons-invert-primary">gradient-spinner-white</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-spinner-white',
          })}
        />
      </div>

      <div className="border border-dotted p-4 rounded-2xl w-70">
        <code>gradient-mirrored-shimmer</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-mirrored-shimmer',
          })}
        />
      </div>

      <div className="border border-dotted p-4 rounded-2xl w-70">
        <code>gradient-mirrored-spinner-blue</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-mirrored-spinner-blue',
          })}
        />
      </div>

      <div className="bg-background-invert-primary border border-dotted p-4 rounded-2xl w-70">
        <code className="text-text-and-icons-invert-primary">gradient-mirrored-spinner-white</code>
        <div
          className={gradientVariants({
            type,
            className,
            gradientName: 'gradient-mirrored-spinner-white',
          })}
        />
      </div>
    </div>
  );
}
