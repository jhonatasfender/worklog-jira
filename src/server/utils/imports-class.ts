import glob from 'glob';
import * as path from 'path';

export type FunctionType = () => void;

type Exported =
  | FunctionType
  | string
  | Record<string, FunctionType | string | Exported[]>
  | Exported[];

export function importClassesFromDirectories(
  directories: string[],
  formats = ['.js', '.ts', '.tsx'],
): FunctionType[] {
  const loadFileClasses = (
    exported: Exported,
    allLoaded: (() => void)[],
  ): FunctionType[] => {
    if (exported instanceof Function) {
      allLoaded.push(exported);
    } else if (exported instanceof Array) {
      exported.forEach(i => loadFileClasses(i, allLoaded));
    } else if (exported instanceof Object || typeof exported === 'object') {
      Object.keys(exported).forEach(key =>
        loadFileClasses(exported[key], allLoaded),
      );
    }

    return allLoaded;
  };

  const allFiles = directories.reduce(
    (allDirs, dir) => allDirs.concat(glob.sync(path.normalize(dir))),
    [] as string[],
  );

  const filter = (file: string): boolean => {
    const dtsExtension = file.substring(file.length - 5, file.length);

    return (
      formats.indexOf(path.extname(file)) !== -1 && dtsExtension !== '.d.ts'
    );
  };

  const dirs = allFiles.filter(filter).map(file => require(file));

  return loadFileClasses(dirs, []);
}
