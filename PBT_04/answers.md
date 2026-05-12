Câu A1 : Tài liệu tham chiếu: tuan_2_css_core/12_css_positioning.md / 5 Giá trị Position
Position	Vẫn chiếm chỗ trong flow?	        Tham chiếu vị trí	            Cuộn theo trang?	          Use case
static	            Có 	                   Mặc định (Không dùng top/left)	         Có	                      Mặc định
relative	        Có 	                   Vị trí gốc của chính nó	                 Có	              Dịch nhẹ, làm mốc choabsolute
absolute	       Không 	                Cha relative gần nhất	           Có(cuộn cùng cha)          Badge, dropdown, tooltip
fixed	           Không 	                  Viewport (Khung nhìn)	         Không (Luôn hiển thị)	      Chat button, modal overlay
sticky	        Có → Không                  Viewport (khi đạt ngưỡng)      Có → Không (Dính khi scroll)   Sticky header, sidebar

- absolute sẽ tham chiếu parent khi phần tử cha trực tiếp (hoặc một thẻ bọc bên ngoài nào đó) được thiết lập position: relative (hoặc absolute/fixed/sticky)
- absolute sẽ tham chiếu document (toàn bộ trang) khi phần tử absolute tìm ngược lên trên mà không thấy bất kỳ thẻ cha hay tổ tiên nào có position khác static
- "nearest positioned ancestor"  là thẻ bao bọc bên ngoài gần nhất có thuộc tính position khác với static, nghĩa là phần tử đó phải được set một trong các giá trị: relative,absolute,fixed hoặc sticky