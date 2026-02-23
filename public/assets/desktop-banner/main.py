import os
from PIL import Image
import glob

def compress_webp(input_path, output_path=None, quality=80, method=6):
    """
    压缩 WebP 文件
    
    参数:
        input_path: 输入文件路径
        output_path: 输出文件路径，默认为原文件名_optimized.webp
        quality: 压缩质量 (1-100)，默认80
        method: 压缩方法 (0-6)，6为最高质量但最慢
    """
    try:
        # 打开图片
        img = Image.open(input_path)
        
        # 如果未指定输出路径，则在原文件名后添加_optimized
        if output_path is None:
            base, ext = os.path.splitext(input_path)
            output_path = f"{base}_optimized{ext}"
        
        # 保存为压缩后的 WebP
        img.save(output_path, 'WEBP', quality=quality, method=method)
        
        # 获取文件大小对比
        original_size = os.path.getsize(input_path)
        compressed_size = os.path.getsize(output_path)
        savings = original_size - compressed_size
        savings_percent = (savings / original_size) * 100 if original_size > 0 else 0
        
        return {
            'success': True,
            'input': input_path,
            'output': output_path,
            'original_size': original_size,
            'compressed_size': compressed_size,
            'savings': savings,
            'savings_percent': savings_percent
        }
        
    except Exception as e:
        return {
            'success': False,
            'input': input_path,
            'error': str(e)
        }

def batch_compress_webp(directory='.', quality=80, overwrite=False, suffix='_optimized'):
    """
    批量压缩目录中的 WebP 文件
    
    参数:
        directory: 目标目录，默认为当前目录
        quality: 压缩质量 (1-100)
        overwrite: 是否覆盖原文件
        suffix: 输出文件后缀（如果不覆盖原文件）
    """
    # 查找所有 webp 文件
    pattern = os.path.join(directory, '**/*.webp')
    webp_files = glob.glob(pattern, recursive=True)
    
    # 排除已经优化过的文件
    webp_files = [f for f in webp_files if suffix not in f]
    
    if not webp_files:
        print(f"在 {directory} 目录下未找到 WebP 文件")
        return
    
    print(f"找到 {len(webp_files)} 个 WebP 文件，开始压缩...")
    print("-" * 60)
    
    total_original = 0
    total_compressed = 0
    success_count = 0
    failed_count = 0
    
    for file_path in webp_files:
        # 确定输出路径
        if overwrite:
            output_path = file_path
        else:
            base, ext = os.path.splitext(file_path)
            output_path = f"{base}{suffix}{ext}"
        
        result = compress_webp(file_path, output_path, quality=quality)
        
        if result['success']:
            success_count += 1
            total_original += result['original_size']
            total_compressed += result['compressed_size']
            
            orig_kb = result['original_size'] / 1024
            comp_kb = result['compressed_size'] / 1024
            save_kb = result['savings'] / 1024
            
            print(f"✓ {os.path.basename(file_path)}")
            print(f"  原大小: {orig_kb:.2f} KB → 新大小: {comp_kb:.2f} KB")
            print(f"  节省: {save_kb:.2f} KB ({result['savings_percent']:.1f}%)")
        else:
            failed_count += 1
            print(f"✗ {os.path.basename(file_path)}")
            print(f"  错误: {result['error']}")
        print()
    
    # 打印汇总
    print("-" * 60)
    print("压缩完成!")
    print(f"成功: {success_count} 个, 失败: {failed_count} 个")
    
    if success_count > 0 and total_original > 0:
        total_savings = total_original - total_compressed
        total_percent = (total_savings / total_original) * 100
        print(f"总原大小: {total_original/1024:.2f} KB")
        print(f"总新大小: {total_compressed/1024:.2f} KB")
        print(f"总节省: {total_savings/1024:.2f} KB ({total_percent:.1f}%)")

# 使用示例
if __name__ == "__main__":
    # 配置参数
    QUALITY = 80           # 压缩质量 (1-100)，数值越小文件越小但质量越低
    OVERWRITE = True     # 是否覆盖原文件，False 会生成新文件
    SUFFIX = '_compressed' # 新文件后缀
    
    # 执行批量压缩
    batch_compress_webp(
        directory='.',
        quality=QUALITY,
        overwrite=OVERWRITE,
        suffix=SUFFIX
    )